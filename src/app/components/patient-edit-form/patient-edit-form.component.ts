import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-edit-form',
  templateUrl: './patient-edit-form.component.html',
  styleUrls: ['./patient-edit-form.component.css'],
})
export class PatientEditFormComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.patientService.getPatient(params['id']).subscribe(
        (res) => {
          console.log(res);
          this.patient = res;
        },
        (err) => console.log(err)
      );
    }
  }
  patient: Patient = {
    first_name: '',
    middle_name: '',
    last_name: '',
    id_card: '',
  };

  updatePatient() {
    this.patientService.updatePatient(this.patient, this.patient.id).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['patients']);
      },
      (err) => console.log(err)
    );
  }
}

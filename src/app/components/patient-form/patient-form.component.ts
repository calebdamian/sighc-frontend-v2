import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  patient: Patient = {
    lastName: '',
    firstName: '',
    dob: new Date(),
    idCard: '',
    contactNumber: '',
    email: '',
  };

  constructor(
    private patientService: PatientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
  }

  //TODO: Get current user id
  submitPatient() {
    this.patientService.createPatient(1, this.patient).subscribe((res) => {
      console.log(res);
      this.router.navigate(['patients']);
    });
  }
}

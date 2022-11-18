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
  patient: Patient = {
    first_name: '',
    id: undefined,
    id_card: '',
    last_name: '',
    medical_record: undefined,
    middle_name: '',
    patient_profile: undefined,
  };
  patientId: undefined;
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
          console.log('AL OBTENER PACIENTE EN EDIT FORM DE PATIENTS');
          console.log(res);
          this.patient = res;
        },
        (err) => console.log(err)
      );
    }
    this.patientId = params['id'];
  }

  updatePatient() {
    console.log('Metodo update patient');
    console.log(this.patientId);
    this.patientService.updatePatient(this.patient, this.patientId).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['patients']);
      },
      (err) => console.log(err)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit {
  patient: Patient = {
    first_name: '',
    middle_name: '',
    last_name: '',
    id_card: '',
  };

  constructor(private patientService: PatientService, private router: Router) {}
  ngOnInit(): void {}

  //TODO: Get current user id
  submitPatient() {
    this.patientService.createPatient(1, this.patient).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/interfaces/patient';
import { AuthService } from 'src/app/services/auth.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.getPatients();
    console.log(this.authService.isAuthenticated());
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe(
      (res) => {
        console.log(res);
        this.patients = res;
      },
      (err) => console.log(err)
    );
  }

  deletePatient(id: number | undefined): void {
    this.patientService.deletePatient(id).subscribe(
      (res) => {
        console.log(res);
        this.getPatients();
      },
      (err) => console.log(err)
    );
  }
}

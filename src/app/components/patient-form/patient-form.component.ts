import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
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

  medicId: number = 1;
  constructor(
    private patientService: PatientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
  }

  //TODO: Get current user id
  submitPatient() {
    this.userService.getUsers().subscribe((res) => {
      console.log('Al crear un paciente');
      console.log(res[0]);
    });
    this.patientService.createPatient(1, this.patient).subscribe((res) => {
      console.log(res);
      this.router.navigate(['patients']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalRecord } from 'src/app/interfaces/medical-record';
import { MedicalRecordService } from 'src/app/services/medical-record.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-medical-record-form',
  templateUrl: './medical-record-form.component.html',
  styleUrls: ['./medical-record-form.component.css'],
})
export class MedicalRecordFormComponent implements OnInit {
  medicalRecord: MedicalRecord = {
    entry: '',
  };
  patientId = undefined;

  constructor(
    private medicalRecordService: MedicalRecordService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) {}
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.patientService.getPatient(params['id']).subscribe(
        (res) => {
          console.log('AL OBTENER PACIENTE EN EDIT FORM DE PATIENTS');
          console.log(res);
        },
        (err) => console.log(err)
      );
    }
    console.log(params['id']);
    this.patientId = params['id'];
  }

  submitMedicalRecord() {
    this.medicalRecordService
      .createMedicalRecord(1, this.patientId, this.medicalRecord)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['patients']);
      });
  }
}

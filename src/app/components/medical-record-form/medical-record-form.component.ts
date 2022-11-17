import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalRecord } from 'src/app/interfaces/medical-record';
import { MedicalRecordService } from 'src/app/services/medical-record.service';

@Component({
  selector: 'app-medical-record-form',
  templateUrl: './medical-record-form.component.html',
  styleUrls: ['./medical-record-form.component.css'],
})
export class MedicalRecordFormComponent implements OnInit {
  medicalRecord: MedicalRecord = {
    entry: '',
  };

  constructor(
    private medicalRecordService: MedicalRecordService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
  }

  //TODO: Get current user id and patient id

  submitMedicalRecord() {
    this.medicalRecordService
      .createMedicalRecord(1, 1, this.medicalRecord)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['patients']);
      });
  }
}

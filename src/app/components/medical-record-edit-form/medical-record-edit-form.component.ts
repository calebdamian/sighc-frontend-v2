import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalRecord } from 'src/app/interfaces/medical-record';
import { MedicalRecordService } from 'src/app/services/medical-record.service';

@Component({
  selector: 'app-medical-record-edit-form',
  templateUrl: './medical-record-edit-form.component.html',
  styleUrls: ['./medical-record-edit-form.component.css'],
})
export class MedicalRecordEditFormComponent implements OnInit {
  constructor(
    private medicalRecordService: MedicalRecordService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.medicalRecordService.getMedicalRecord(params['id']).subscribe(
        (res) => {
          console.log(res);
          this.medicalRecord = res;
        },
        (err) => console.log(err)
      );
    }
  }

  medicalRecord: MedicalRecord = {
    entry: '',
  };

  updateMedicalRecord() {
    this.medicalRecordService
      .updateMedicalRecord(this.medicalRecord, this.medicalRecord.id)
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['patients']);
        },
        (err) => console.log(err)
      );
  }
}

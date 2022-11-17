import { Component, OnInit } from '@angular/core';
import { MedicalRecord } from 'src/app/interfaces/medical-record';
import { MedicalRecordService } from 'src/app/services/medical-record.service';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css'],
})
export class MedicalRecordsComponent implements OnInit {
  medicalRecords: MedicalRecord[] = [];

  constructor(private medicalRecordService: MedicalRecordService) {}
  ngOnInit(): void {
    this.getMedicalRecords();
  }

  getMedicalRecords() {
    this.medicalRecordService.getMedicalRecords().subscribe(
      (res) => (this.medicalRecords = res),
      (err) => console.log(err)
    );
  }

  deleteMedicalRecord(id: number | undefined) {
    this.medicalRecordService.deleteMedicalRecord(id).subscribe(
      (res) => {
        console.log(res);
        this.getMedicalRecords();
      },
      (err) => console.log(err)
    );
  }
}

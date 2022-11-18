import { Component, OnInit } from '@angular/core';
import { MedicalRecord } from 'src/app/interfaces/medical-record';
import { MedicalRecordService } from 'src/app/services/medical-record.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css'],
})
export class MedicalRecordsComponent implements OnInit {
  medicalRecords: MedicalRecord[] = [];

  constructor(private medicalRecordService: MedicalRecordService) {}
  ngOnInit(): void {
    console.log('ON INIT del medical records component');
    console.log(this.getMedicalRecords());
    this.getMedicalRecords();
  }

  getMedicalRecords() {
    this.medicalRecordService.getMedicalRecords().subscribe(
      (res) => (this.medicalRecords = res),
      (err) => console.log(err)
    );
  }

  deleteMedicalRecord(id: number | undefined) {
    Swal.fire({
      title: 'Está seguro de eliminar?',
      text: 'No podrá revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar historia clínica',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Se ha eliminado la historia clínica',
          'Historia clínica eliminada',
          'success'
        );
        this.medicalRecordService.deleteMedicalRecord(id).subscribe(
          (res) => {
            console.log(res);
            this.getMedicalRecords();
          },
          (err) => console.log(err)
        );
      }
    });
  }
}

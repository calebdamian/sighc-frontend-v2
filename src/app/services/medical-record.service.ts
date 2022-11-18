import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { MedicalRecord } from '../interfaces/medical-record';
import { Patient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root',
})
export class MedicalRecordService {
  BASE_URL: string = 'http://127.0.0.1:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private readonly http: HttpClient) {}

  getMedicalRecords(): Observable<MedicalRecord[]> {
    return this.http
      .get<MedicalRecord[]>(
        `${this.BASE_URL}/medical-records`,
        this.httpOptions
      )
      .pipe(map((results: any) => results, catchError(this.handleError)));
  }
  getMedicalRecord(id: number): Observable<MedicalRecord> {
    return this.http.get<MedicalRecord>(
      `${this.BASE_URL}/medical-record/${id}`,
      this.httpOptions
    );
  }
  createMedicalRecord(
    userId: number,
    patientId: number | undefined,
    medicalRecord: MedicalRecord
  ): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(
      `${this.BASE_URL}/user/${userId}/patient/${patientId}/medical-record`,
      medicalRecord
    );
  }
  deleteMedicalRecord(id?: number) {
    return this.http.delete<MedicalRecord>(
      `${this.BASE_URL}/medical-record/${id}`
    );
  }
  updateMedicalRecord(medicalRecord: MedicalRecord, id?: number) {
    return this.http.put<MedicalRecord>(
      `${this.BASE_URL}/medical-record/${id}`,
      medicalRecord
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {
      console.log(
        `Backend returned code ${error.status}, body was: ${error.status}`
      );
    }
    return throwError(() => new Error('Error.'));
  }
}

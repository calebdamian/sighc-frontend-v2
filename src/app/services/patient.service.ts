import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Patient } from '../interfaces/patient';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  BASE_URL: string = 'http://127.0.0.1:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private readonly http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http
      .get<Patient[]>(`${this.BASE_URL}/patients`, this.httpOptions)
      .pipe(
        map((results: any) => results.patients, catchError(this.handleError))
      );
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(
      `${this.BASE_URL}/patient/${id}`,
      this.httpOptions
    );
  }
  createPatient(userId: number, patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(
      `${this.BASE_URL}/user/${userId}/patient`,
      patient
    );
  }
  updatePatient(patient: Patient, id?: number) {
    return this.http.put<Patient>(`${this.BASE_URL}/patient/${id}`, patient);
  }
  deletePatient(id?: number) {
    return this.http.delete<Patient>(`${this.BASE_URL}/patient/${id}`);
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

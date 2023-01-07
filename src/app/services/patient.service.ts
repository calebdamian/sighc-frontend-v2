import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Patient } from '../interfaces/patient';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  BASE_URL: string = 'https://ingweb-sighc-backend.onrender.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private readonly http: HttpClient) {}

  // getPatients() {
  //   return this.http
  //     .get<Patient[]>(`${this.BASE_URL}/patients`, this.httpOptions)
  //     .pipe(
  //       map((results: any) => results.patients, catchError(this.handleError))
  //     );
  // }

  getPatients() {
    return this.http.get(`${this.BASE_URL}/patients`, this.httpOptions).pipe(
      tap((pat) => {
        return pat;
      })
    );
  }

  getDrugs() {
    return this.http.get(`${this.BASE_URL}/drugs`, this.httpOptions).pipe(
      tap((drugs) => {
        return drugs;
      })
    );
  }

  getEvolutions(patientId: number) {
    return this.http
      .get(`${this.BASE_URL}/evolutions/${patientId}`, this.httpOptions)
      .pipe(
        tap((evols) => {
          return evols;
        })
      );
  }

  createEvolution(evol: any): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/evolutions`, evol);
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(
      `${this.BASE_URL}/patients/${id}`,
      this.httpOptions
    );
  }
  createPatient(userId: number, patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.BASE_URL}/patients`, patient);
  }
  updatePatient(patient: Patient, id?: number) {
    return this.http.put<Patient>(`${this.BASE_URL}/patients/${id}`, patient);
  }
  deletePatient(id?: number) {
    return this.http.delete<Patient>(`${this.BASE_URL}/patients/${id}`);
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

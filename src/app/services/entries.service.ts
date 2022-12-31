import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Entry } from '../interfaces/entry';

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  BASE_URL: string = 'http://127.0.0.1:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private readonly http: HttpClient) {}

  getEntriesByPatient(id: number) {
    return this.http
      .get(`${this.BASE_URL}/patients/${id}/entries`, this.httpOptions)
      .pipe(
        tap((entries) => {
          return entries;
        })
      );
  }

  createEntry(entry: Entry, patientId: number) {
    return this.http.post<Entry>(
      `${this.BASE_URL}/patients/${patientId}/entries`,
      entry
    );
  }
}

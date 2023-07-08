import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JourneyRequest } from '../models/journey-request.model';
import { Journey } from '../models/journey.model';


@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  apiUrl = 'https://localhost:7178/api';

  constructor(private http: HttpClient) { }

  getJourney(journeyRequest: JourneyRequest): Observable<Journey> {
    return this.http.post<Journey>(this.apiUrl + '/Journey', journeyRequest)
      .pipe(
        catchError((error: any) => {
          if (error.status === 400) {
            return throwError(error.error);
          }
          return throwError('Ocurrió un error en el servidor.');
        })
      );
  }
}

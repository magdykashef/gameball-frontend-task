import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

import { IChallenge } from './../shared/models/challenge';


@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  // get all challenges from database
  getAllChallenges$ = this.http.get<IChallenge[]>(`${this.url}/challenges`)
    .pipe(
      catchError(this.handleError)
    );


  private handleError(err: any) {
    let errorMessage: string = '';

    if (err.error instanceof ErrorEvent) {
      // handle the error of a clint-side or network error occurred. 
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    else {
      // the backend returned an unsuccessful response code.
      // the response body may contain clues as to what went wrong. 
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    return throwError(errorMessage);
  }

}

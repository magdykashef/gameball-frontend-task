import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IChallenge } from './../shared/models/challenge';


@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  private url = 'http://localhost:4200';

  constructor(private http: HttpClient) { }


  // get all challenges from database
  getAllChallenges(): Observable<IChallenge[]> {
    return this.http.get<IChallenge[]>(`${this.url}/challenges`);
  }

}

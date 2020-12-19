import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IChallenge } from './../shared/models/challenge';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const challenges: IChallenge[] = [
      {
        id: 1,
        title: "click & collect",
        date: "12/12/2018 at 13:00",
        description: "It is a long established fact that a reader will be distracted by the readable eye.",
        frubies: 5000,
        points: 2500,
        milestone: 3,
        quests: "the big thing",
        status: "active"
      },
      {
        id: 2,
        title: "click & collect",
        date: "12/12/2018 at 13:00",
        description: "It is a long established fact that a reader will be distracted by the readable eye.",
        frubies: 5000,
        points: 2500,
        milestone: 3,
        quests: "the big thing",
        status: "inactive"
      },
      {
        id: 3,
        title: "click & collect",
        date: "12/12/2018 at 13:00",
        description: "It is a long established fact that a reader will be distracted by the readable eye.",
        frubies: 5000,
        points: 2500,
        milestone: 3,
        quests: "the big thing",
        status: "active"
      },
      {
        id: 4,
        title: "click & collect",
        date: "12/12/2018 at 13:00",
        description: "It is a long established fact that a reader will be distracted by the readable eye.",
        frubies: 5000,
        points: 2500,
        milestone: 3,
        quests: "the big thing",
        status: "active"
      },
      {
        id: 5,
        title: "click & collect",
        date: "12/12/2018 at 13:00",
        description: "It is a long established fact that a reader will be distracted by the readable eye.",
        frubies: 5000,
        points: 2500,
        milestone: 3,
        quests: "the big thing",
        status: "active"
      },
      {
        id: 6,
        title: "click & collect",
        date: "12/12/2018 at 13:00",
        description: "It is a long established fact that a reader will be distracted by the readable eye.",
        frubies: 5000,
        points: 2500,
        milestone: 3,
        quests: "the big thing",
        status: "inactive"
      }
    ];
    return { challenges };
  }

  // Overrides the genId method to ensure that a challenge always has an id.
  // If the challenges array is empty,
  // the method below returns the initial number (11).
  // if the challenges array is not empty, the method below returns the highest
  // challenge id + 1.
  // genId(challenges: IChallenges[]): number {
  //   return challenges.length > 0 ? Math.max(...challenges.map(challenge => challenge.id)) + 1 : 11;
  // }
}
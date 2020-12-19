import { IChallenge } from './../shared/models/challenge';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChallengesComponent {

  errorMessage: string = '';
  activeChallenges: IChallenge[] = [];

  //get challenges data form service
  challenges$ = this.challengeservice.getAllChallenges$
    .pipe(
      tap(// get active challenges number
        challenges => {
          this.activeChallenges = challenges.filter(challenge => challenge.status === 'active');
          console.log("activeChallenges: " + this.activeChallenges.length);
        }
      ),
      catchError(error => {
        this.errorMessage = error;
        console.log(this.errorMessage);
        return EMPTY;
      })
    );

  constructor(private challengeservice: ChallengesService) { }

}

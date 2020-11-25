import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ChallengesService } from '../services/challenges.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChallengesComponent {

  errorMessage: string = '';

  //get challenges data form service
  challenges$ = this.challengeservice.getAllChallenges$
    .pipe(
      catchError(error => {
        this.errorMessage = error;
        return EMPTY;
      })
    );

  constructor(private challengeservice: ChallengesService) { }

}

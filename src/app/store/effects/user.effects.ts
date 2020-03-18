import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {Store, select} from '@ngrx/store';
import {Observable, ObservableInput, of} from 'rxjs';
import {EUserActions, GetUsers, GetUsersSuccess} from '../actions/user.actions';
import {map, switchMap} from 'rxjs/operators';
import {IAppState} from '../state/app.state';
import {IUserHttp} from '../../models/user-http.interface';
import {UserService} from '../../services/user.service';

@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this._userService.getUsers({page: 1})),
    switchMap((res) => {
      console.log(res);
      return of(new GetUsersSuccess(res));
    })
  );

  constructor(
    // tslint:disable:variable-name
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {
  }
}

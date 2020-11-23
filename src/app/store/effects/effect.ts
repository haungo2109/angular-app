import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ApiLogin } from '../actions/actions';

import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ApiHandleError, LoginSuccess } from '../actions/actions';

@Injectable()
export class RootEffects {
  constructor(private actions$: Actions, private auth: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiLogin),
      mergeMap((action) => {
        return this.auth
          .signInWithEmailAndPassword(action.email, action.password)
          .pipe(
            tap((res) => {
              const token = res.headers.get('Authenticated');
              localStorage.setItem('authenticated', token);
            }),
            map((res) => {
              return LoginSuccess({
                name: res.body.HoTen,
                email: res.body.Email,
                address: res.body.DiaChi,
                phone: res.body.SDT,
                sex: res.body.GioiTinh,
              });
            }),
            catchError((error) => of(ApiHandleError({ error })))
          );
      })
    )
  );
}

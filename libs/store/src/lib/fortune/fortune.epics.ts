import {
  AdhFortune,
  AdhFortuneDay,
  AdhHoroscope,
} from '@aztro-daily-horoscope/models';
import {
  aztroService,
  transfromAztroFortuneResponseToAdhFortune,
} from '@aztro-daily-horoscope/services';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  ActionsObservable,
  Epic,
  ofType,
  StateObservable,
} from 'redux-observable';
import { from } from 'rxjs';
import { withLatestFrom, catchError, map, switchMap } from 'rxjs/operators';

import { errorSlice } from '../error/error.slice';
import { horoscopeSelectors } from '../horoscope/horoscope.selectors';
import { fortuneSlice } from './fortune.slice';

export const getUserFortuneEpic = (
  action$: ActionsObservable<PayloadAction<AdhFortuneDay>>,
  state$: StateObservable<any>
) =>
  action$.pipe(
    ofType(fortuneSlice.actions.getUserFortune.type),
    // get user's current horoscope
    withLatestFrom(state$.pipe(map(horoscopeSelectors.getUserHoroscope))),
    switchMap(
      ([action, horoscope]: [PayloadAction<AdhFortuneDay>, AdhHoroscope]) => {
        // call service
        return from(aztroService.getFortune(horoscope, action.payload)).pipe(
          // map response model to app model
          map(transfromAztroFortuneResponseToAdhFortune),
          map((fortune: AdhFortune) =>
            // map to success action
            fortuneSlice.actions.gerUserFortuneSuccess(fortune)
          ),
          catchError((error) =>
            from([
              errorSlice.actions.handleError(error), // handle error
              fortuneSlice.actions.getUserFortuneError(), // map to error action
            ])
          )
        );
      }
    )
  );

export const fortuneEpics: Epic[] = [getUserFortuneEpic];

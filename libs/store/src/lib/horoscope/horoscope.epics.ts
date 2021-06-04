import {
  AdhHoroscope,
  AdhHoroscopeDay,
  AdhZodiacSign,
} from '@aztro-daily-horoscope/models';
import {
  aztroService,
  transfromAztroHoroscpeResponseToAdhHoroscope,
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
import { RootState } from '../root/root-state.interface';

import { horoscopeSlice } from './horoscope.slice';

export const getUserHoroscopeEpic = (
  action$: ActionsObservable<PayloadAction<AdhHoroscopeDay>>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    ofType(horoscopeSlice.actions.getUserHoroscope.type),
    // get user's current zodiac sign
    withLatestFrom(state$.pipe(map(horoscopeSelectors.getUserZodiac))),
    switchMap(
      ([action, zodiacSign]: [
        PayloadAction<AdhHoroscopeDay>,
        AdhZodiacSign
      ]) => {
        // call service
        return from(aztroService.getHoroscope(zodiacSign, action.payload)).pipe(
          // map response model to app model
          map(transfromAztroHoroscpeResponseToAdhHoroscope),
          map((horoscope: AdhHoroscope) =>
            // map to success action
            horoscopeSlice.actions.gerUserHoroscopeSuccess(horoscope)
          ),
          catchError((error) =>
            from([
              errorSlice.actions.handleError(error), // handle error
              horoscopeSlice.actions.getUserHoroscopeError(), // map to error action
            ])
          )
        );
      }
    )
  );

export const horoscopeEpics: Epic[] = [getUserHoroscopeEpic];

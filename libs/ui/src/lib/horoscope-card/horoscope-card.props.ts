import {
  AdhHoroscopeDay,
  AdhZodiacSign,
} from '@aztro-daily-horoscope/models';
import {
  horoscopeActions,
  horoscopeSelectors,
  RootState,
} from '@aztro-daily-horoscope/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const mapStateToProps = (state: RootState) => {
  return {
    zodiacItem: horoscopeSelectors.getUserZodiacItem(state),
    horoscope: horoscopeSelectors.getUserHoroscope(state),
    loadingStatus: horoscopeSelectors.getHoroscopeLoadingStatus(state),
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
  return {
    getUserHoroscope(zodiacSign: AdhZodiacSign, day: AdhHoroscopeDay) {
      dispatch(horoscopeActions.fetchHoroscope({zodiacSign, day}));
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type HoroscopeCardProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps, HoroscopeCardProps };

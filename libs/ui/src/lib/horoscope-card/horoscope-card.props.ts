import { AdhHoroscopeDay } from '@aztro-daily-horoscope/models';
import {
  horoscopeSelectors,
  horoscopeSlice,
  RootState,
} from '@aztro-daily-horoscope/store';
import { Dispatch } from '@reduxjs/toolkit';

const mapStateToProps = (state: RootState) => {
  return {
    zodiacItem: horoscopeSelectors.getUserZodiacItem(state),
    horoscope: horoscopeSelectors.getUserHoroscope(state),
    loadingStatus: horoscopeSelectors.getHoroscopeLoadingStatus(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getUserHoroscope(day: AdhHoroscopeDay) {
      dispatch(horoscopeSlice.actions.getUserHoroscope(day));
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type HoroscopeCardProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps, HoroscopeCardProps };

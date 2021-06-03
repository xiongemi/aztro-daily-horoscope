import { Dispatch } from '@reduxjs/toolkit';
import { horoscopeSlice } from '@aztro-daily-horoscope/store';
import { AdhHoroscope } from '@aztro-daily-horoscope/models';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserHoroscope(horoscope: AdhHoroscope) {
      dispatch(horoscopeSlice.actions.setUserHoroscope(horoscope));
    },
  };
};

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type HoroscopeListProps = mapDispatchToPropsType;

export { mapDispatchToProps, HoroscopeListProps };

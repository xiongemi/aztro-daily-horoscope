import { AdhZodiacSign } from '@aztro-daily-horoscope/models';
import { horoscopeSlice } from '@aztro-daily-horoscope/store';
import { Dispatch } from '@reduxjs/toolkit';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserZodiacSign(zodiacSign: AdhZodiacSign) {
      dispatch(horoscopeSlice.actions.setUserZodiacSign(zodiacSign));
    },
  };
};

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type ZodiacSignListProps = mapDispatchToPropsType;

export { mapDispatchToProps, ZodiacSignListProps };

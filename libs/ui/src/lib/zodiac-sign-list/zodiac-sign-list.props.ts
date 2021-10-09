import { AdhZodiacSignItem } from '@aztro-daily-horoscope/models';
import { horoscopeActions } from '@aztro-daily-horoscope/store';
import { Dispatch } from '@reduxjs/toolkit';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserZodiacSignItem(zodiacSignItem: AdhZodiacSignItem) {
      dispatch(horoscopeActions.setUserZodiacSignItem(zodiacSignItem));
    },
  };
};

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type ZodiacSignListProps = mapDispatchToPropsType;

export { mapDispatchToProps, ZodiacSignListProps };

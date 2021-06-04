import { combineEpics } from 'redux-observable';

import { horoscopeEpics } from '../horoscope/horoscope.epics';

export const rootEpics = combineEpics(...horoscopeEpics);

import { combineEpics } from 'redux-observable';

import { fortuneEpics } from '../horoscope/horoscope.epics';

export const rootEpics = combineEpics(...fortuneEpics);

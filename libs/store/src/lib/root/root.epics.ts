import { combineEpics } from 'redux-observable';
import { fortuneEpics } from '../fortune/fortune.epics';

export const rootEpics = combineEpics(...fortuneEpics);

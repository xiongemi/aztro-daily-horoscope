import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { initialRootState } from './root-state.initial';

import { rootEpics } from './root.epics';
import { rootReducer } from './root.reducer';

declare const process: any;

const epicMiddleware = createEpicMiddleware();
const isDevelopment = process.env.NODE_ENV === 'development';

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: isDevelopment ? [epicMiddleware, logger] : [epicMiddleware],
  devTools: isDevelopment,
  preloadedState: initialRootState,
});

epicMiddleware.run(rootEpics);

export { rootStore };

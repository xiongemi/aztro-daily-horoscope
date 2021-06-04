import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpics } from './root.epics';
import { rootReducer } from './root.reducer';

declare const process;

const epicMiddleware = createEpicMiddleware();
const isDevelopment = process.env.NODE_ENV === 'development';

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: isDevelopment ? [epicMiddleware, logger] : [epicMiddleware],
  devTools: isDevelopment,
});

epicMiddleware.run(rootEpics);

export { rootStore };

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './root.reducer';
import { rootEpics } from './root.epics';

const epicMiddleware = createEpicMiddleware();
const isDevelopment = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: rootReducer,
  middleware: isDevelopment ? [epicMiddleware, logger] : [epicMiddleware],
  devTools: isDevelopment,
});

epicMiddleware.run(rootEpics);

export { store };

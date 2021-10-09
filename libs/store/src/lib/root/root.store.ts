import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { initialRootState } from './root-state.initial';
import { rootReducer } from './root.reducer';

declare const process: any;

const isDevelopment = process.env.NODE_ENV === 'development';

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: isDevelopment ? [thunk, logger] : [thunk],
  devTools: isDevelopment,
  preloadedState: initialRootState,
});

export { rootStore };

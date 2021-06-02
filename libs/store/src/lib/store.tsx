import { configureStore } from '@reduxjs/toolkit';
import { History } from 'history';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import { WlaRootState } from './models/root-state.interface';
import { transformSearchFormToPersist } from './persist-transform';
import { rootEpic } from './root.epic';
import { createRootReducer } from './root.reducer';

const epicMiddleware = createEpicMiddleware();
const isDevelopment = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  transforms: [transformSearchFormToPersist],
};

export function configureAppStore(preloadedState?: WlaRootState) {
  const store = configureStore({
    reducer: persistReducer(persistConfig, createRootReducer()),
    middleware: isDevelopment ? [epicMiddleware, logger] : [epicMiddleware],
    devTools: isDevelopment,
  });

  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store);

  return { store, persistor };
}

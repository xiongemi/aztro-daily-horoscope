import { LoadingStatus } from '../models/loading-status.enum';

import { RootState } from './root-state.interface';

export const initialRootState: RootState = {
  error: null,
  horoscope: {
    loadingStatus: LoadingStatus.Initial,
  },
};

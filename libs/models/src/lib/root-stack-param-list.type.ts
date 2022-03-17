import { AppRoutes } from './app-routes.enum';

export type RootStackParamList = {
  [AppRoutes.list]: undefined;
  [AppRoutes.card]: undefined;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

import {
  ReduxState,
  ServerContext,
  AppRoutes,
} from './appSetup';

export const App = () => {
  return (
    <ReduxState>
      <ServerContext>
        <AppRoutes />
      </ServerContext>
    </ReduxState>
  );
}

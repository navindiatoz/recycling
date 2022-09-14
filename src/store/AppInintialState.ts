import { AppState } from './AppState';

export const appInintialState: AppState = {
  loading: {
    show: false
  },
  login: {
    error: null,
    isRecoveredPassword: false,
    isRecoveringPassword: false,
    isLaggedIn: false,
    isLoggingIn: false
  }
};

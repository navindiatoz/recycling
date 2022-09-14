import { createReducer, on } from '@ngrx/store';
import { appInintialState } from '../AppInintialState';
import { login, loginfail, loginSuccess, recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from './Login.actions';
import { LoginState } from './LoginState';

const inintialState: LoginState = appInintialState.login;

const reducer = createReducer(inintialState,
  on(recoverPassword, cuurentState =>
  ({
    ...cuurentState,
    error: null,
    isRecoveredPassword: false,
    isRecoveringPassword: true
  })
  ),
  on(recoverPasswordSuccess, cuurentState =>
  ({
    ...cuurentState,
    error: null,
    isRecoveredPassword: true,
    isRecoveringPassword: false
  })),
  on(recoverPasswordFail, (cuurentState, action) => ({
    ...cuurentState,
    error: action.error,
    isRecoveredPassword: false,
    isRecoveringPassword: false
  })),
  on(login, currentState => ({
    ...currentState,
    error: null,
    isLaggedIn: false,
    isLoggingIn: true
  })),
  on(loginSuccess, cuurentState =>
    ({
      ...cuurentState,
      error: null,
      isLaggedIn: true,
      isLoggingIn: false
    })),
    on(loginfail, (cuurentState, action) => ({
      ...cuurentState,
      error: action.error,
      isLaggedIn: false,
      isLoggingIn: false
    })),
);

export const loginReducer = (state: LoginState, action: any) => reducer(state, action);

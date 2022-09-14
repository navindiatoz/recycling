import { createReducer, on } from '@ngrx/store';
import { hide, show } from './Loading.actions';
import { LoadingState } from './loadingState';

const inintialState: LoadingState = {show: false};

const reducer = createReducer(
  inintialState,
  on(show, () => ({ show: true })),
  on(hide, () => ({ show: false }))
);

export const loadingReducer = (state: LoadingState, action: any) =>
  reducer(state, action);

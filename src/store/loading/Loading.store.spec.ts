import { createAction } from '@ngrx/store';
import { hide, show } from './Loading.actions';
import { loadingReducer } from './Loading.reducers';
import { LoadingState } from './loadingState';

describe('Loading store', () => {
  it('show', () => {
    const inintialState: LoadingState = { show: false };
    const newState = loadingReducer(inintialState, show());
    expect(newState).toEqual({ show: true });
  });
  it('hide', () => {
    const inintialState: LoadingState = { show: true };
    const newState = loadingReducer(inintialState, hide());
    expect(newState).toEqual({ show: false });
  });
  it('should keep state if action is unknown', () => {
    const inintialState: LoadingState = { show: true };
    const action = createAction('unkownn');
    const newState = loadingReducer(inintialState, action);
    expect(newState).toEqual({ show: true });
  });
});

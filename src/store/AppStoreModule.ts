import { StoreModule } from '@ngrx/store';
import { loadingReducer } from './loading/Loading.reducers';
import { loginReducer } from './login/Login.reducers';

export const appStoreModule = [
  StoreModule.forRoot([]),
  StoreModule.forFeature('loading',loadingReducer),
  StoreModule.forFeature('login',loginReducer)
];

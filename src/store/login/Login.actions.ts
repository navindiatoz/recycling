import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modal/User/User';

export const recoverPassword = createAction('[Recover password]');

export const recoverPasswordSuccess = createAction('[Recover password] success');
export const recoverPasswordFail = createAction('[Recover password] fail', props<{ error: any }>());

export const login = createAction('[login]');
export const loginSuccess = createAction('[login] success', props<{ user: User }>());
export const loginfail = createAction('[login] fail', props<{ error: any }>());

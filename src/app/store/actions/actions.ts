import { createAction, props } from '@ngrx/store';
import {
  HandleError,
  Login,
  Register,
  User,
} from 'src/app/interfaces/interfaces';

// this will be dispatched from some component or service
export const LoginSuccess = createAction(
  '[Header C] LoginSuccess',
  props<User>()
);

export const LogoutSuccess = createAction('[Header C] LogoutSuccess');

// these will be dispatched by the Effect result
export const ApiHandleError = createAction('[Error]', props<HandleError>());

export const ApiLogin = createAction('[Header C] Login', props<Login>());

export const ApiRegister = createAction(
  '[Header C] Register',
  props<Register>()
);

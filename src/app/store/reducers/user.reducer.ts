import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/interfaces/interfaces';
import { ApiRegister, LoginSuccess, LogoutSuccess } from '../actions/actions';

export const initialState: User = {
  name: '',
  email: '',
  sex: '',
  address: '',
  phone: '',
};

const _userReducer = createReducer(
  initialState,
  on(LoginSuccess, (state, action: User) => ({
    ...action,
  })),
  on(LogoutSuccess, (state) => {
    localStorage.removeItem('authenticated');
    return initialState;
  })
);

export function userReducer(state: User | undefined, action) {
  return _userReducer(state, action);
}

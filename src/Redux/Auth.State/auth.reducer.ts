import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from './auth.model';
import { loginStart, loginSuccess, logout, updateProfile } from './auth.actions';
import * as AuthActions from './auth.actions';


export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.loginStart, (state) =>({
    ...state,
    loading: true
  })),
  on(AuthActions.loginSuccess, (state, {user})=> ({
    ...state,
    user,
    isLoggedIn: true,
    loadding: false
  })),
  on(AuthActions.logout, () => initialAuthState),

  on(AuthActions.updateProfile, (state, {name, avatarUrl}) => ({
    ...state,
    user: state.user ? {...state.user, name, avatarUrl} : null
  }))
);

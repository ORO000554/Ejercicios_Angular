import { createAction, props } from "@ngrx/store";
import { UserProfile } from './auth.model';

export const loginStart = createAction('[Auth] Login Start');

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{user: UserProfile}>()
);

export const logout = createAction('[Auth] Logout');

export const updateProfile = createAction(
  'Auth Update Profile',
  props<{name: string; avatarUrl: string}>()
);

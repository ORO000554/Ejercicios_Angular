import { email } from "@angular/forms/signals";

export interface UserProfile{
  uid: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface AuthState{

  user: UserProfile | null;
  isLoggedIn: boolean;
  loading: boolean;
}
export const initialAuthState: AuthState= {
  user: null,

  isLoggedIn: false,
  loading: false,
}

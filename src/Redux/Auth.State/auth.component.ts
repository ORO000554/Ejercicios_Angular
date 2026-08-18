import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { UserProfile } from "./auth.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectAuthLoading, selectCurrentUser, selectIsLoggedIn } from "./auth.selector";
import { loginStart } from './auth.actions';
import * as AuthActions from './auth.actions';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, AuthComponent],
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  user$: Observable<UserProfile | null>;
  isLoggedIn$: Observable<boolean>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectCurrentUser);
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
    this.loading$ = this.store.select(selectAuthLoading);
}
onLogin(){
  this.store.dispatch(AuthActions.loginStart());
  setTimeout(() => {
      const mockUser: UserProfile = {
        uid: 'oro554',
        name: 'Irvin JS',
        email: 'irvin.jimenez@e-openroad.com',
        avatarUrl: 'https://i.pinimg.com/474x/8c/79/5d/8c795d260c989e57c6627e161864996c.jpg'
      };
      this.store.dispatch(AuthActions.loginSuccess({ user: mockUser }));
    }, 1500);
}
onLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  onSaveProfile(nuevoNombre: string) {
    if (nuevoNombre.trim()) {
      // Actualiza el nombre y cambia el avatar usando el nuevo nombre como semilla
      this.store.dispatch(AuthActions.updateProfile({
        name: nuevoNombre,
        avatarUrl: `https://i.pinimg.com/474x/8c/79/5d/8c795d260c989e57c6627e161864996c.jpg{nuevoNombre}`
      }));
    }
  }
}

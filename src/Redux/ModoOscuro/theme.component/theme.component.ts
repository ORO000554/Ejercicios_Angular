import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { toggleTheme } from "../theme.actions";
import { selectIsDarkMode } from "../theme.selector";
import { AsyncPipe, NgClass } from "@angular/common";

@Component({
    selector: 'app-theme',
    standalone: true,
    imports: [AsyncPipe, NgClass],
    template:`
    <div [ngClass]="{'dark-mode': (isDark$ | async)}" class="pantalla">
        <p >El modo oscuro está: {{ (isDark$ | async) ? 'ACTIVADO': 'DESACTIVADO'}}</p>
        <button (click)="cambiarTema()">Camiar de Modo</button>

    </div>
    
    `,
    styleUrl:'./theme.component.css',
})
export class ThemeComponent{
    private store = inject(Store);
    isDark$ = this.store.select(selectIsDarkMode);

    cambiarTema(){
        this.store.dispatch(toggleTheme());
    }
}
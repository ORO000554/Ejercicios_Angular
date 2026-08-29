import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AsyncPipe, NgClass } from "@angular/common";
import * as Actions from './tema.actions';
import * as Selectors from './tema.selectors';
import {inject} from '@angular/core';

@Component({
    selector: 'app-modoOscurov2',
    standalone: true,
    imports: [AsyncPipe, NgClass],
    template: `
    <div class="container" style="width: 100%; heigth: 100%;">

    <div style="" class="panel-config" [ngClass]="{'bg-dark text-white': (esOscuro$ | async)}">
        <h4>
            Configuracion de Apariencia
        </h4>

        <button (click)="cambiarModo()">
            Camiar a modo {{(esOscuro$ | async) ? 'Claro' : 'Oscuro'}}
        </button>

        <div style="">
            <span>Color de realce actual : <strong>{{colorClase$ | async }}</strong></span>
            <br>
            <button (click)="cambiarColor('azul')" style="color: blue;">Azul</button>
            <button (click)="cambiarColor('verde')" style="color: green;">Verde</button>
            <button (click)="cambiarColor('rojo')" style="color: red;">Rojo</button>
        </div>
    </div>
    </div>

    `,

})
export class TemaConfigComponent implements OnInit{
    private store = inject(Store);

    esOscuro$: Observable<boolean> = this.store.select(Selectors.selectEsModoOscuro);
    colorClase$: Observable<string> = this.store.select(Selectors.selectClaseColor);

    ngOnInit(){

        //Al ccargar el ccomponente se intenta leer si hay algo guardado
        const modoGuardado = localStorage.getItem('user-modo') as 'claro' | 'oscuro';
        const colorGuardado = localStorage.getItem('user-color') as 'azul' | 'verde' | 'rojo';

        if(modoGuardado && colorGuardado){
            this.store.dispatch(Actions.cargarTemaGuardado({modo: modoGuardado, color: colorGuardado}));

        }

    }
    cambiarModo(){

        this.store.dispatch(Actions.alternarModo());

        setTimeout(() =>{
        this.store.select(Selectors.selectThemeFeature).subscribe(state =>{
            localStorage.setItem('user-modo', state.modo);
        }).unsubscribe();
        },50);
    }
    cambiarColor(color: 'azul' | 'verde' | 'rojo'){

        this.store.dispatch(Actions.cambiarColorAcento({color}));
        localStorage.setItem('user-color', color);
    }

}

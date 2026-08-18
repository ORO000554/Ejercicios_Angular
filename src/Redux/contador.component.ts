import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { incrementar, decrementar, reiniciar } from './contador.redux';
import { AsyncPipe } from "@angular/common";

@Component({
    selector:'app-contador-redux',
    standalone: true,
    imports: [AsyncPipe],
    template: `
    <h5>Contador con Redux</h5>
    <div>
    <p style="margin-left: 10px;">Valor: {{contador$ | async }}</p>
    </div>
    <div>
    <button class="btn-redux" style="padding: 5px; width: 45px; margin: 5px; background-color: #a9e7dc; border-radius: 20px" (click)="menos()">-</button>
    <button class="btn-redux" style="padding: 5px; width: 45px; margin: 5px; background-color: #d19514; border-radius: 20px" (click)="mas()">+</button>
    <button class="btn-redux" style="padding: 5px; width: 75px; margin: 5px; background-color: #6390e4; border-radius: 20px" (click)="reiniciar()">reiniciar</button>

    </div>
    `,
    styleUrl:'./contador.component.css',
})
export class ContadorComponentRedux{
    contador$: Observable<number>

    constructor(private store: Store<{ contador: number}>){
        this.contador$= store.select('contador');

    }
    mas(){
        console.log('boton mas presionado...')
        this.store.dispatch(incrementar());
    }
    menos(){
        this.store.dispatch(decrementar());
    }
    reiniciar(){
        this.store.dispatch(reiniciar());
    }
}

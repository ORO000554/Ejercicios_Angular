import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { incrementar, decrementar } from "./contador.redux";
import { AsyncPipe } from "@angular/common";

@Component({
    selector:'app-contador-redux',
    standalone: true,
    imports: [AsyncPipe],
    template: `
    <h5>CONTADOR CON REDUX</h5>
    <div>
    <button class="btn-redux" style="padding: 5px; width: 45px; margin: 5px; background-color: #a9e7dc; border-radius: 20px" (click)="menos()">-</button>
    <button class="btn-redux" style="padding: 5px; width: 45px; margin: 5px; background-color: #d19514; border-radius: 20px" (click)="mas()">+</button>

    <p>Valor: {{contador$ | async }}</p>
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
        this.store.dispatch(incrementar());
    }
    menos(){
        this.store.dispatch(decrementar());
    }
}
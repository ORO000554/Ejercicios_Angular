import {Component} from '@angular/core';

@Component({
    selector: "app-contador",
    template: `
    <h5>
    CONTADOR {{contador}}
    </h5>
    <button (click)="incrementar()">Incrementar</button>
    <button class= "button2" (click)="decrementar()">Decrementar</button>
    <button class ="button3" (click)="Limpiar()">Resetear</button>
    
    `,
    styleUrl:'./contador.css'
})
export class AppContador{

    contador: number = 0;
    incrementar(){
        this.contador++;
    }
    restar: number=0;
    decrementar(){
        this.contador--;
    }
    limpiar: number =0;
    Limpiar(){
        this.contador=0;
    }
}
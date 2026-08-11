import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import {AsyncPipe, CurrencyPipe, NgFor} from '@angular/common';
import { addProduct, removeProduct, clearCart } from "../cart.actions";
import { selectCartItems, selectCartCount, selectCartTotal } from "../cart.selector";

@Component ({
    selector: 'app-carrritoCompras',
    standalone: true,
    imports:[AsyncPipe, CurrencyPipe, NgFor],
    template: `
    <div style= "padding: 20px; font-family: sans-serif;">
        <h2>Carrito de compras</h2>
        <div>
            <button (click)= "agregarPrueba('Laptop', 1200)">+ Añadir Laptop ($1200)</button>
            <button (click)= "agregarPrueba('Mouse', 25) " style="margin-left: 10px;">+ Añadir Mouse ($25)</button>
        </div>
        <p><b>Productos en total: </b> {{count$ | async}}</p>
        <p><b>Precio total:</b> {{total$ | async | currency}}</p>

        <h3>PRODUCTOS AGREGADOS: </h3>
        <ul>
            <li *ngFor="let item of (item$ | async)">
          {{ item.name }} - {{ item.price | currency }}
          <button (click)="eliminar(item.id)" style="margin-left: 10px; color: red;">Quitar</button>
        </li>
        </ul>

        @if (((count$ | async) ?? 0) > 0) {
            <button (click)= "limpiar()" style="background-color: orange;">Vaciar Carrito</button>
        }
    </div>
    `,

})
export class CartComponent{
private store = inject(Store);

item$ = this.store.select(selectCartItems);
count$ = this.store.select(selectCartCount);
total$ = this.store.select(selectCartTotal);

agregarPrueba(nombre: string, precio: number){
    const nuevoProducto = { id: Date.now(), name: nombre, price: precio};
    this.store.dispatch(addProduct({product: nuevoProducto}));

}
eliminar(id: number){
    this.store.dispatch(removeProduct({id}));
}
limpiar(){

    this.store.dispatch(clearCart());
}
}
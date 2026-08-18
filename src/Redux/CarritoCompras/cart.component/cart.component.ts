import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import {AsyncPipe, CurrencyPipe, NgFor} from '@angular/common';
import { addProduct, removeProduct, clearCart, editProduct } from "../cart.actions";
import { selectCartItems, selectCartCount, selectCartTotal } from "../cart.selector";

@Component ({
    selector: 'app-carrritoCompras',
    standalone: true,
    imports:[AsyncPipe, CurrencyPipe, NgFor],
    template: `

    `,
    templateUrl: './cart.component.html'

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
editar(id: number, cantidadActual: number){
  const nuevoValor = prompt ('Introduce la nueva cantidad: ', cantidadActual.toString());

  if(nuevoValor !== null){
  const nuevaCantidad = parseInt(nuevoValor, 10);
    if(!isNaN(nuevaCantidad) && nuevaCantidad > 0){
  this.store.dispatch(editProduct({id, quantity: nuevaCantidad}));

    }
  }
}
limpiar(){

    this.store.dispatch(clearCart());
}
}

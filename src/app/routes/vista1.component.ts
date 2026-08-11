import { Component } from "@angular/core";
import { ThemeComponent } from "../../Redux/ModoOscuro/theme.component/theme.component";
import { TodoComponent } from "../../Redux/ListaTareas/todo.component/todo.component";
import { CartComponent } from "../../Redux/CarritoCompras/cart.component/cart.component";
import { ContadorComponentRedux } from "../../Redux/contador.component";

@Component ({
    selector: 'vista1-component',
    template: `
    <h3 style="text-align: center;">Seccion de ejercicios Redux + Angular</h3>
    <img style="width: 45%; heigth:40%;" src="https://municipiodequeretaro.gob.mx/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-07-at-2.28.43-PM4-1536x864.jpeg"/>

    <div style="background-color: aliceblue;">
        <app-contador-redux/>
        <div style="padding: 5px; margin-top: 10px; background-color: alicelue">
        <app-todo/>
            
        </div>
        <app-theme/>
        <app-carrritoCompras/>

    </div>
    `,
    imports: [ContadorComponentRedux, TodoComponent, ThemeComponent, CartComponent, ContadorComponentRedux],
    

})
export class Vista1{

}
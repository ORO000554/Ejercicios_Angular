import { Component, signal } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-form',
  imports:[ReactiveFormsModule],
  template: `
  <div>
    <!-- <label>Nombre: </label>
    <input [formControl]= 'Nombre' type="text">
    <button (click)="nuevoValor()"></button> -->
  </div>

  `,

  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormComponent {
  Nombre = new FormControl('');
  Telefono = new FormControl('');
  Correo = new FormControl('');
  Usuario = new FormControl('');

  nuevoValor(){
    this.Nombre.setValue('');
    this.Telefono.setValue('');
    this.Correo.setValue('');
    this.Usuario.setValue('');
  }

}

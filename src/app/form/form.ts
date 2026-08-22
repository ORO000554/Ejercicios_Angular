import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Registro {
  nombre: string;
  telefono: string;
  correo: string;
  usuario: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class FormComponent {
  registros: Registro[] = [];

  formulario = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    telefono: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    correo: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    usuario: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  private readonly claveStorage = 'registros-formulario';

  constructor() {
    const datos = localStorage.getItem(this.claveStorage);

    if (datos) {
      this.registros = JSON.parse(datos);
    }
  }

  guardarRegistro(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.registros.push(this.formulario.getRawValue());
    localStorage.setItem(
      this.claveStorage,
      JSON.stringify(this.registros)
    );

    this.formulario.reset();
  }
}

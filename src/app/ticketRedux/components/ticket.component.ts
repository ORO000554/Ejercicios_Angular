import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import * as Selectors from '../store/selectors/ticket.selectors';
import { TicketActions } from "../store/actions/ticket.actions";
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs";

@Component({
  selector: 'app-ticket-component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ticket.component.html',

})
export class TicketComponent implements OnInit{


  constructor(private toastr: ToastrService, private form: FormBuilder){}

  miForm!: FormGroup;
  // constructor(private form: FormBuilder){}

  private store = inject(Store);

  tickets$ = this.store.select(Selectors.selectTicketsFiltrados);
  filtroActual$ = this.store.select(Selectors.selectFiltroActual);
  cargando$ = this.store.select(Selectors.selectCargando);


  inputTitulo: string = '';
  inputDescripcion: string = '';
  inputCategoria: 'Hardware' | 'Software' | 'Redes' = 'Software';
  inputPrioridad: 'Baja' | 'Media' | 'Alta' = 'Media';

  ngOnInit(): void {

    this.miForm = this.form.group({
      //el parametro required hace que sea oligattorio
      inputTitulo: ['', Validators.required],
      inputDescripcion: ['', Validators.required],
      inputCategoria: ['', Validators.required],
      inputPrioridad: ['', Validators.required]
    })
    //con el componente se dispara la accion para obtener el effect + service
    this.store.dispatch(TicketActions.cargarTicketsIniciales());


  }
  guardarTicket(){
    if(this.miForm.invalid){
      this.toastr.error('No ha rellenado el formulario!!, por favor rellena el formulario')
       return;
    }
    const formValues = this.miForm.value;

    this.store.dispatch(TicketActions.crearTicket({
      titulo: formValues.inputTitulo,
    descripcion: formValues.inputDescripcion,
    categoria: formValues.inputCategoria, // Enviamos el valor seleccionado (ej. 'Hardware')
    prioridad: formValues.inputPrioridad
    }));
    this.miForm.reset({
     inputTitulo : '',
    inputDescripcion : '',
    inputCategoria: '',
    inputPrioridad: '',

    })

// Alerta para mostrar el resultado corrrecto
    this.toastr.success('Ticket agregado correctamente!')
    console.log(this.miForm.value)
  }
  actualizarEstado(id: string, event: Event){

    const nuevoEstado = (event.target as HTMLSelectElement).value as any;
    this.store.dispatch(TicketActions.cambiarEstado({ticketId: id, nuevoEstado}));

  }
  aplicarFiltro(cat: string){
    this.store.dispatch(TicketActions.establecerFiltroCategoria({categoria: cat}))
  }


}

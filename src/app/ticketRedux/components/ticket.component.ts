import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import * as Selectors from '../store/selectors/ticket.selectors';
import { TicketActions } from "../store/actions/ticket.actions";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket.component.html',

})
export class TicketComponent implements OnInit{
  constructor(private toastr: ToastrService){}



  private store = inject(Store);

  tickets$ = this.store.select(Selectors.selectTicketsFiltrados);
  filtroActual$ = this.store.select(Selectors.selectFiltroActual);
  cargando$ = this.store.select(Selectors.selectCargando);


  inputTitulo = '';
  inputDescripcion = '';
  inputCategoria: 'Hardware' | 'Software' | 'Redes' = 'Software';
  inputPrioridad: 'Baja' | 'Media' | 'Alta' = 'Media';

  ngOnInit(): void {
    //con el componente se dispara la accion para obtener el effect + service
    this.store.dispatch(TicketActions.cargarTicketsIniciales());

  }
  guardarTicket(){
    if(!this.inputTitulo.trim() || !this.inputDescripcion.trim()){

      alert('No ha rellenado el formulario!!')

       return;
    }
    this.store.dispatch(TicketActions.crearTicket({
      titulo: this.inputTitulo,
      descripcion: this.inputDescripcion,
      categoria: this.inputCategoria,
      prioridad: this.inputPrioridad
    }));

    this.inputTitulo = '';
    this.inputDescripcion = '';

    this.toastr.success('Ticket agregado correctamente!')
  }
  actualizarEstado(id: string, event: Event){

    const nuevoEstado = (event.target as HTMLSelectElement).value as any;
    this.store.dispatch(TicketActions.cambiarEstado({ticketId: id, nuevoEstado}));

  }
  aplicarFiltro(cat: string){
    this.store.dispatch(TicketActions.establecerFiltroCategoria({categoria: cat}))
  }


}

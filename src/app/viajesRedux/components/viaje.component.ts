import { AsyncPipe, NgClass } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ViajesRedux } from '../models/viajes.model';
import { Store } from "@ngrx/store";
import * as ViajeReduxSelector from '../store/selectors/viaje.selectors';
import * as ViajeReduxActions from '../store/actions/viajes.actions';


@Component({
  selector: 'viaje-redux-dashboard',
  standalone: true,
  imports: [AsyncPipe, NgClass],
  templateUrl: './viaje.component.html',
})

export class ViajeReduxComponent implements OnInit{
  viajes$!: Observable<ViajesRedux[]>;
  loading$!: Observable<boolean>;
  currentFilter$!: Observable<string>;

  constructor(private readonly store: Store){}
  ngOnInit(): void {
    this.viajes$ = this.store.select(
      ViajeReduxSelector.seleccionarViajeFiltrado,

    );
    this.loading$ = this.store.select(ViajeReduxSelector.seleccionarViajeSiCargando);
    this.currentFilter$ = this.store .select(
      ViajeReduxSelector.seleccionarFiltroViajeActivo,
    );
      this.store.dispatch(ViajeReduxActions.cargarViaje());
  }

  onFilterChange(newFilter: 'TODO' | 'BARATO' | 'CARO' | 'PREMIUM'): void{
    this.store.dispatch(
      ViajeReduxActions.cambiarFiltradoCosto({filtro: newFilter})
    );
  }
}

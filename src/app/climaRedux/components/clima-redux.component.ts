import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ClimaEspacialSelectors from '../store/selectors/clima-redux.selectors';
import * as ClimaEspacialActions from '../store/actions/clima-redux.actions';
import { SateliteTelemetria } from '../model/clima-redux.model';

@Component({
  selector: 'app-space-dashboard',
  standalone: true,
  templateUrl: './clima-redux.component.html',
  styleUrls: ['./clima-redux.component.css'],
  imports: [AsyncPipe, NgClass],
})
export class ClimaComponent implements OnInit {
  telemetria$!: Observable<SateliteTelemetria[]>;
  loading$!: Observable<boolean>;
  currentFilter$!: Observable<string>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.telemetria$ = this.store.select(
      ClimaEspacialSelectors.selecccionarTelemetriaFiltrada,
    );
    this.loading$ = this.store.select(ClimaEspacialSelectors.seleccionarSiCargando);
    this.currentFilter$ = this.store.select(
      ClimaEspacialSelectors.seleccionarFiltroActivo,
    );

    this.store.dispatch(ClimaEspacialActions.cargarTelemetria());
  }

  onFilterChange(newFilter: 'TODO' | 'BAJO' | 'MEDIO' | 'ALTO' | 'CRITICO'): void {
    this.store.dispatch(
      ClimaEspacialActions.cambiarFiltroAlerta({ filtro: newFilter }),
    );
  }
}

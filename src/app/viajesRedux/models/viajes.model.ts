export interface ViajesRedux{
  idViaje: string;
  NombrePasajero: string;
  Destino: string;
  Costo: 'BARATO' | 'CARO' | 'PREMIUM';
  fecha: string;
  origen: string;
  duracion: number;
  medioTransporte: 'Avion' | 'Tren' | 'Bus' | 'Auto' | 'Barco';
  estado: 'Pendiente' | 'En proceso' | 'Completado' | 'Cancelado';
}
export interface EstadoViajeRedux{
  viajes: ViajesRedux[];
  loading: boolean;
  error: string | null;
  filtroCostoSeleccionado: 'TODO' | 'BARATO' | 'CARO' | 'PREMIUM';
  filtroEstadoSeleccionado: 'TODO'| 'Pendiente' | 'En proceso' | 'Completado' | 'Cancelado';
  filtroMedioTransporteSeleccionado: 'TODO' | 'Avion' | 'Tren' | 'Bus' | 'Auto' | 'Barco';
}

export interface ViajesRedux{
  idViaje: string;
  NombrePasajero: string;
  Destino: string;
  Costo: 'BARATO' | 'CARO' | 'PREMIUM';
  fecha: string;
}
export interface EstadoViajeRedux{
  viajes: ViajesRedux[];
  loading: boolean;
  error: string | null;
  filtroCostoSeleccionado: 'TODO' | 'BARATO' | 'CARO' | 'PREMIUM';
}

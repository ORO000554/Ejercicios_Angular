export interface SateliteTelemetria{
  idSatelite: string;
  velVientoSolar: number;
  nivelRadiacion: 'BAJO' | 'MEDIO' | 'ALTO' | 'CRITICO';
  probLlamaradaSolar: number;
  ultimaActualizacion: string;
}

export interface EstadoClimaEspacial {
  telemetria: SateliteTelemetria[];
  loading: boolean;
  error: string | null;
  filtroAlertaSeleccionada: 'TODO' | 'BAJO' | 'MEDIO' |  'ALTO' |'CRITICO';
}

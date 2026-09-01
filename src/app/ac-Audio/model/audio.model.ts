export interface ConfiguracionAudio {

  bass: number; //rrango de -12 a 12 dB
  mids: number; //rango de -12 a -12 dB
  treble: number; //rango de -12 a 12 dB
  volume: number; //rango de 0 a 100
}

export interface EstadoAudio {
  configuracion: ConfiguracionAudio;
  microfonoConectado: boolean;
  microfonoEstado: 'desconectado' | 'conectando' | 'conectado' | 'error'
  errorMesage: string | null;
}

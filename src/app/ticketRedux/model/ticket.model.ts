export interface Ticket{
  id: string;
  titulo:  string;
  descripcion: string;
  categoria: 'Hardware' | 'Software' | 'Redes';
  prioridad: 'Baja' | 'Media' | 'Alta';
  estado: 'Abierto' | 'En proceso' | 'Resuelto';
  fechaCreacion: Date;
}


export interface SupportState{
  tickets: Ticket[];
  filtroCategoria: string;
  cargando: boolean;
}

export interface TemaState{
    modo: 'claro' | 'oscuro';
    colorAcento: 'azul' | 'verde' | 'rojo';
    animacionesActivas: boolean;
}

    export const estadoInicial: TemaState={
        modo: 'claro',
        colorAcento: 'azul',
        animacionesActivas: true,
    };
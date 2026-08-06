import {Component, signal} from '@angular/core';

@Component({
    selector: 'app-clases',
    template: `
    <ul [class]="listClasses">Lista de clases con CSS</ul>
    <section [class]="sectionClasses()">Seccion de clases</section>
    <button [class]="buttonClasses()">Botton de clases</button>


    <ul [style]= "listStyles()">Lista estilos</ul>
    <section [style]= "sectionStyles()">Seccion de estilos</section>
    
    `,

})
export class appClases{
    listClasses= 'full-width list';
    sectionClasses= signal(['expandable', 'elevated']);
    buttonClasses= signal({
        higlighted_: true,
        embiggened: false,
    });

    listStyles= signal('display: flex; padding: 2px; font-weight: bold; color : #2d35d3;');
    sectionStyles= signal({
        border: '1px solid black', 'font-weight': 'bold',
        padding: '20px',
        margin: '8px',
        borderRadius:'10px',
    })
}
import {Component} from '@angular/core';

class Task{
    id:number;
    name:string;
}
let TASKS:Task[] = [
    { id: 1, name: 'Trabalhar'},
    { id: 2, name: 'Lavar pratos'},
    { id: 3, name: 'Tirar poeira'},
    { id: 4, name: 'Compras no supermercado'},
    { id: 5, name: 'Cuidar das crianças'},
    { id: 6, name: 'Jogar Videogame'},
    { id: 7, name: 'Almoçar'},
    { id: 8, name: 'Jantar'},
    { id: 9, name: 'Fazer exercicio'},
    { id: 10, name: 'Pagar contas'}
]

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1>
    <ul>
        <li *ngFor="let item of tasks">
        {{ item.id }} - {{ item.name }}
        </li>
    </ul>
    `
})
export class AppComponent{
    title = 'Lista de tarefas';
    tasks:Task[] = TASKS;
}

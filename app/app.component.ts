import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}<h1>
    <input [(ngModel)]="title">
    {{title}}
    `
})
export class AppComponent{
    title = 'Hello World Muller';
}

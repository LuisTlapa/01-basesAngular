import {Component} from '@angular/core'

@Component({
    selector:'app-contador',
    template: `
    
    <h1>{{titulo}}</h1>

    <h2>La base es: <strong>{{base}}</strong></h2>

    <button (click)="acomular(base)"> + {{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acomular(-(base))" > - {{base}}</button>
        `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;

    /*sumar(){
        this.numero +=1;
    }

    restar(){
        this,this.numero -=1;
    } */

    acomular(valor:number){
        this.numero += valor
    }


}
import { Injectable } from "@angular/core";
import { Personaje } from '../interface/dbz.interface';
import { PersonajesComponent } from '../personajes/personajes.component';

@Injectable()
export class DbzService {
    private _personajes:Personaje[] = [
        {
          nombre: 'Goku',
          poder: 19000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        },
    ];

    get Personajes():Personaje[]{
        return [...this._personajes];
    }

    constructor(){}

    agragarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}
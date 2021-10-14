import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {
  
  //@Input('data')  personajes:Personaje[]=[]
  
  get personajes(){
    return this.dbzService.Personajes
  }

  constructor(private dbzService:DbzService){
    
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { ContadorComponent } from '../../Contador/contador/contador.component';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  
  @Input('data2') nuevo: Personaje = {
    nombre:'',
    poder:0
  }
  //@Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  constructor( private  dbzService:DbzService){

  }
  
  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
    //this.onNuevoPersonaje.emit(this.nuevo)

    this.dbzService.agragarPersonaje(this.nuevo);

    this.nuevo = {
      nombre:'',
       poder:0
    }
  }

  cambiarNombre(event:any){
    console.log(event.target.value)
  }



}

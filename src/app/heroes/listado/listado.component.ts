import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string [] = ['Spiderman','Capitan America', 'Hulk','Thor','Loki','Thanos','Black Widow']
  heroeEliminado: string  ='';

  borrarHeroe(){
    console.log("Borrando ...")
    this.heroeEliminado = this.heroes.shift() || '';
  
  }
  
  
}

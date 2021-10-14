import { Component} from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../service/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  

  nuevo: Personaje = {
    nombre:'Pickoro',
    poder:1500

  }
  
  

  constructor(){}

}

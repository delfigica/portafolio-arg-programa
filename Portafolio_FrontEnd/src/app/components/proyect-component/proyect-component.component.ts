import { Component, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-proyect-component',
  templateUrl: './proyect-component.component.html',
  styleUrls: ['./proyect-component.component.css']
})
export class ProyectComponentComponent  {
  @Input() modeEdit: boolean = false;
  @Input() proyect: any;
  tecnologies: any;

  deleteProyect(proyectId: any){
    const url = `https://backend-arg-progrma.herokuapp.com/user/proyect/delete/${1}/${proyectId}`;
    axios
      .delete(url)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
  }
}

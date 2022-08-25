import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css'],
})
export class ProyectComponent implements OnInit {
  @Input() modeEdit: boolean = false;
  public proyects: any;

  ngOnInit(): void {
    this.getProyectData();
    console.log(this.proyects)
  }

  getProyectData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/proyect/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.proyects = res.data;
        console.log(this.proyects);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

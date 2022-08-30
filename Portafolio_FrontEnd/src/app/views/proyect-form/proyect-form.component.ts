import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyect-form',
  templateUrl: './proyect-form.component.html',
  styleUrls: ['./proyect-form.component.css'],
})
export class ProyectFormComponent implements OnInit, OnDestroy {
  public proyects: any;

  proyect: any;
  descriptionInput: string;
  titleInput: string;
  urlInput: string;
  proyectId: any;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  btnText: string = 'Agregar proyecto';


  ngOnInit(): void {
    this.getProyectData();

    this.sub = this.route.params.subscribe((params) => {
      this.proyectId = params['proyectId'];

    });
    if (this.proyectId !== undefined) {
      this.btnText = 'Editar proyecto';
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProyectData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/proyect/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.proyects = res.data;
        if (this.proyectId !== undefined) {
          this.proyect = this.proyects.find((p: any) => p.id == this.proyectId);
          this.descriptionInput = this.proyect.description;
          this.titleInput = this.proyect.title;
          this.urlInput = this.proyect.url;
        }
        console.log(this.proyects);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addProyect() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/proyect/generate/${1}`;
    axios
      .post(url, {
        title: this.titleInput,
        description: this.descriptionInput,
        url: this.urlInput,
      })
      .then((res) => {
        console.log(res.data);
        this.router.navigate(['admin/edit']);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  editProyect(){
    const url = `https://backend-arg-progrma.herokuapp.com/user/proyect/edit/${1}/${this.proyectId}`;
    axios
      .put(url, null, {
        params: {
          title: this.titleInput,
          description: this.descriptionInput,
          url: this.urlInput
        }
      })
      .then(res => {
        Swal.fire({
          text: res.data
        })
        this.router.navigate(['admin/edit']);
      })
      .catch(err => {
        console.log(err)
        Swal.fire({
          text: 'Por favor intente de nuevo'
        })
      })
  }
}

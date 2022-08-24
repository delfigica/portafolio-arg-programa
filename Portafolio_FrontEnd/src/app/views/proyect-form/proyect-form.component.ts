import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

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

  ngOnInit(): void {
    this.getProyectData();

    this.sub = this.route.params.subscribe((params) => {
      this.proyectId = params['proyectId'];
    });
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
        this.router.navigate(['admin/edit/proyect/tecnologies/' + res.data.id]);
      })
      .catch((err) => {
        console.log(err);
      });

  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-tecnology-form',
  templateUrl: './tecnology-form.component.html',
  styleUrls: ['./tecnology-form.component.css'],
})
export class TecnologyFormComponent implements OnInit {
  public tecnologies: any;
  tecnologiesInput: any = [];
  form: FormGroup;
  proyectId: any;
  private sub: any;
  proyects: any;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = fb.group({
      selectedTecnologies: new FormArray([]),
    });
  }

  ngOnInit(): void {
    this.getTecnologies();
    this.getProyect();
  }


  getTecnologies() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/skill/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.tecnologies = res.data;
        this.tecnologies.map((tecno: any) =>
          this.tecnologiesInput.concat({ name: tecno.name, value: tecno.id })
        );
        console.log(this.tecnologies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onTecnologieChange(event: any) {
    const selectedTecnologies = this.form.controls[
      'selectedTecnologies'
    ] as FormArray;
    if (event.target.checked) {
      selectedTecnologies.push(new FormControl(event.target.value));
    } else {
      const index = selectedTecnologies.controls.findIndex(
        (x) => x.value === event.target.value
      );
      selectedTecnologies.removeAt(index);
    }
    this.tecnologiesInput = this.form.value;
    console.log(this.tecnologiesInput.selectedTecnologies);
  }

  addTecnologies() {
    for (let i = 0; i < this.tecnologiesInput.length; i++) {
      const url = `https://backend-arg-progrma.herokuapp.com/user/proyect/addTecnology/${1}/${
        this.proyectId
      }/${this.tecnologiesInput[i]}`;
      axios
        .post(url)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }

  getProyect() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/proyect/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.proyects = res.data;
        this.proyectId = this.proyects[this.proyects.length - 1].id;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

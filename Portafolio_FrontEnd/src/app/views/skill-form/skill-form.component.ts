import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css'],
})
export class SkillFormComponent implements OnInit, OnDestroy {
  btnText: string = 'Agregar Skill';

  public skills: any;
  skill: any;
  nameInput: string;
  percentageInput: number;
  urlInput: string;
  skillId: any;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getSkillData();
    this.sub = this.route.params.subscribe((params) => {
      this.skillId = params['skillId'];
    });
    if (this.skillId !== undefined) {
      this.btnText = 'Editar skill';
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getSkillData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/skill/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.skills = res.data;
        if (this.skillId != undefined) {
          this.skill = this.skills.find((s: any) => s.id == this.skillId);
          this.nameInput = this.skill.name;
          this.percentageInput = this.skill.percentage;
          this.urlInput = this.skill.url;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addSkill() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/skill/generate/${1}`;
    axios
      .post(url, {
        name: this.nameInput,
        percentage: this.percentageInput,
        url: this.urlInput,
      })
      .then((res) => {
        Swal.fire({
          text: res.data
        })
        this.router.navigate(['admin/edit']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  editSkill() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/skill/edit/${1}/${
      this.skillId
    }`;
    axios
      .put(url, null, {
        params: {
          name: this.nameInput,
          percentage: this.percentageInput,
          url: this.urlInput,
        },
      })
      .then((res) => {
        Swal.fire({
          text: res.data
        })
        this.router.navigate(['admin/edit']);
      })
      .catch((err) => {
        Swal.fire({
          text: 'Por favor, intente de nuevo'
        })
        console.log(err);
      });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css'],
})
export class ExperienceFormComponent implements OnInit, OnDestroy {
  public experiences: any;
  experience: any;
  descriptionInput: string;
  institutionInput: string;
  experienceId: any;
  private sub: any;
  textBtn: string = 'Agregar experiencia';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getExperienceData();
    this.sub = this.route.params.subscribe((params) => {
      this.experienceId = params['experienceId'];
    });

    if (this.experienceId !== undefined) {
      this.textBtn = 'Editar experiencia';
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getExperienceData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/experience/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.experiences = res.data;
        if (this.experienceId !== undefined) {
          this.experience = this.experiences.find(
            (e: any) => e.id == this.experienceId

          );
          console.log(this.experience);
          this.descriptionInput = this.experience.description;
          this.institutionInput = this.experience.name_institution;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addExperience() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/experience/generate/${1}`;
    axios
      .post(url, {
        description: this.descriptionInput,
        name_institution: this.institutionInput,
      })
      .then((res) => {
        console.log(res);
        this.router.navigate(['admin/edit']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  editExperience() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/experience/edit/${1}/${
      this.experienceId
    }`;
    axios
      .put(url, null, {
        params: {
          name_institution: this.institutionInput,
          description: this.descriptionInput,
        },
      })
      .then((res) => {
        console.log(res.data);
        this.router.navigate(['admin/edit']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

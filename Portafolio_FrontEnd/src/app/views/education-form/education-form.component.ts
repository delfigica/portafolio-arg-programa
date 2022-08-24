import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css'],
})
export class EducationFormComponent implements OnInit, OnDestroy {
  public educations: any;
  education: any;
  descriptionInput: string;
  institutionInput: string;
  educationId: any;
  private sub: any;
  textBtn: string = 'Agregar educación';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getEducationData();
    this.sub = this.route.params.subscribe((params) => {
      this.educationId = params['educationId'];
    });
    if (this.educationId !== undefined) {
      this.textBtn = 'Editar educación';
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getEducationData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/education/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.educations = res.data;
        if (this.educationId !== undefined) {
          this.education = this.educations.find(
            (e: any) => e.id == this.educationId
          );
          this.descriptionInput = this.education.description;
          this.institutionInput = this.education.name_institution;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addEducation() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/education/generate/${1}`;
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

  editEducation() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/education/edit/${1}/${
      this.educationId
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css'],
})
export class ExperienceFormComponent implements OnInit {
  public experiences: any;

  descriptionInput: String;
  institutionInput: String;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getExperienceData()
  }

  getExperienceData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/experience/${1}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.router.navigate(['admin/edit'])
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
        console.log(res.data);
        console.log(this.experiences)
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css'],
})
export class EducationFormComponent implements OnInit {
  public educations: any;

  constructor() {}

  ngOnInit(): void {}

  // getExperienceData() {
  //   const url = `https://backend-arg-progrma.herokuapp.com/user/education/${1}`;
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       this.educations = res.data;
  //       // if (this.experienceId !== undefined) {
  //       //   this.experience = this.experiences.find(
  //       //     (e: any) => e.id == this.experienceId
  //       //   );
  //         console.log(this.education);
  //         this.descriptionInput = this.experience.description;
  //         this.institutionInput = this.experience.name_institution;
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
}

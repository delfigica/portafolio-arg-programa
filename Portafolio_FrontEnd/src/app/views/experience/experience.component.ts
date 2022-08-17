import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  public experiences: any;

  @Input() modeEdit: Boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.getExperienceData();
  }

  getExperienceData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/experience/${1}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.experiences = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

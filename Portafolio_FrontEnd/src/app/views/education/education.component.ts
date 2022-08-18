import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public educations: any;

  ngOnInit(): void {
    this.getEducationData();
  }

  getEducationData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/education/${1}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.educations = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-education-component',
  templateUrl: './education-component.component.html',
  styleUrls: ['./education-component.component.css'],
})
export class EducationComponentComponent implements OnInit {
  @Input() education: any;
  public educations: any;

  @Input() modeEdit: boolean = false;

  ngOnInit(): void {
    this.getEducationsData();
  }

  getEducationsData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/education/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.educations = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteEducation(ID: any) {
    const url = `https://backend-arg-progrma.herokuapp.com/user/education/delete/${1}/${ID}`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

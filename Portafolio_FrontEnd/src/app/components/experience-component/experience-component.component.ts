import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.css'],
})
export class ExperienceComponentComponent implements OnInit {
  @Input() experience: any;
  public experiences: any;

  @Input() modeEdit: boolean = false;

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

  deleteExperience(ID: any) {
    const url = `https://backend-arg-progrma.herokuapp.com/user/experience/delete/${1}/${ID}`;
    axios.delete(url)
    .then(res => {
      console.log(res);
      console.log('eliminado')
    })
    .catch(err => {
      console.log(err)
    })
  }

}

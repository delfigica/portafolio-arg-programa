import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  public skills: any;
  @Input() modeEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getSkills()
  }

  getSkills(){
    const url = `https://backend-arg-progrma.herokuapp.com/user/skill/${1}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.skills = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  @Input() modeEdit: Boolean = false;
  constructor() {}

  public data: any;

  public title: any;
  public description: any;
  public name: any;

  ngOnInit(): void {
    this.getUserData();
    console.log(this.modeEdit)
  }

  getUserData() {
    const url = `https://backend-arg-progrma.herokuapp.com/users/get/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.data = res.data;
        this.title = this.data.title;
        this.description = this.data.description;
        this.name = this.data.name;
      })
      .catch((err) => {
        console.log(err);
      });
  }


  deleteUserData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/edit/${1}`;
    axios
      .put(url, null, {
        params: {
          "title": "",
          "description": "",
          "name": ""
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

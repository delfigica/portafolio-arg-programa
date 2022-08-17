import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-about-me-form',
  templateUrl: './about-me-form.component.html',
  styleUrls: ['./about-me-form.component.css'],
})
export class AboutMeFormComponent implements OnInit {
  descriptionInput: string;
  titleInput: string;

  public data: any;

  public title: any;
  public description: any;
  public name: any;

  ngOnInit(): void {
    this.getUserData();
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

  editUserData() {
    if (this.titleInput.trim().length > 0) {
      this.title = this.titleInput;
    } else if (this.descriptionInput.trim().length > 0) {
      this.description = this.descriptionInput;
    }
    const url = `https://backend-arg-progrma.herokuapp.com/user/edit/${1}`;
    axios
      .post(url, null, {
        params: {
          title: this.title,
          description: this.description,
          name: this.name,
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  constructor(private router: Router) {}
}
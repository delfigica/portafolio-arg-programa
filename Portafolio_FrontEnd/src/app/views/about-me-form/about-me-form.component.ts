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
  nameInput: any;
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
        this.titleInput = this.data.title;
        this.descriptionInput = this.data.description;
        this.nameInput = this.data.name;
        console.log(this.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  editUserData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/edit/${1}`;
    axios
      .put(url, null, {
        params: {
          title: this.titleInput,
          description: this.descriptionInput,
          name: this.nameInput,
        },
      })
      .then((res) => {
        this.data = res.data;
        this.router.navigate(['admin/edit']);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  constructor(private router: Router) {}
}

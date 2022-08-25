import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() modeEdit: boolean = false;

  public data: any;

  public title: any;
  public description: any;
  public name: any;

  loading: boolean = true;
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
      })
      .then(() => {
        this.loading = false;
      })
  }

  deleteUserData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/edit/${1}`;
    axios
      .put(url, null, {
        params: {
          title: '',
          description: '',
          name: '',
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
}

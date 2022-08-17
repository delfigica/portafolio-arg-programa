import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public data: any;

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    const url = `https://backend-arg-progrma.herokuapp.com/users/get/${1}`;
    axios.get(url)
      .then(res => {
        console.log(res.data)
        this.data = res.data;
      })
      .catch(err => {
        console.log(err)
      })
  }

}

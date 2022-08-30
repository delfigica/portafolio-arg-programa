import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options: AnimationOptions = {    
    path: '/assets/91194-development.json'  
  };
  constructor() { }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}

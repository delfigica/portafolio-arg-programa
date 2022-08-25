import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {}

  logOut() {
    this.userService
      .logout()
      .then(() => {
        this.route.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

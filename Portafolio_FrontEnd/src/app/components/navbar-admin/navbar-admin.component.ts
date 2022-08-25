import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css'],
})
export class NavbarAdminComponent implements OnInit {
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit(): void {
    console.log(this.route.url);
  }

  logOut() {
    Swal.fire({
      text: '¿Está seguro que quiere cerrar sesión?',
      confirmButtonText: 'Confirmar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService
          .logout()
          .then(() => {
            this.route.navigate(['/']);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }
}

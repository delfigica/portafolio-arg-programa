import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  formReg: FormGroup;

  constructor(private userService: UserService, private route: Router) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formReg.value.email !== 'admin@portafolio.com') {
      Swal.fire({
        icon: 'error',
        text: 'El correo electronico ingresado es incorrecto',
      });
    } else if (this.formReg.value.password !== 'argentina_programa') {
      Swal.fire({
        icon: 'error',
        text: 'La contraseña ingresada es incorrecta',
      });
    } else {
      this.userService
        .login(this.formReg.value)
        .then((res) => {
          this.route.navigate(['/admin/edit']);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

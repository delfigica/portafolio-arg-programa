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
      this.userService
        .login(this.formReg.value)
        .then((res) => {
          this.route.navigate(['/admin/edit']);
        })
        .catch((err) => {
          Swal.fire({
            text: 'Credenciales invalidas'
          })
          console.log(err);
        });
    }
  }


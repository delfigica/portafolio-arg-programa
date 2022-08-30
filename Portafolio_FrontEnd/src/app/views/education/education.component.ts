import { Component, Input, OnInit } from '@angular/core';

import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public educations: any;
  @Input() modeEdit: boolean = false;
  ngOnInit(): void {
    this.getEducationData();
  }

  trackByFn(i: any) {
    return i;
  }

  getEducationData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/education/${1}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.educations = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteEducation(ID: any) {
    Swal.fire({
      text: '¿Está seguro que quiere eliminar esta información?',
      confirmButtonText: 'Confirmar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://backend-arg-progrma.herokuapp.com/user/education/delete/${1}/${ID}`;
        axios
          .delete(url)
          .then((res) => {
            Swal.fire({
              text: res.data,
            });
            this.educations = this.educations.filter(
              (edu: any) => edu.id != ID
            );
          })
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            Swal.fire({
              text: 'Por favor intente de nuevo',
            });
            console.log(err);
          });
      }
    });
  }
}

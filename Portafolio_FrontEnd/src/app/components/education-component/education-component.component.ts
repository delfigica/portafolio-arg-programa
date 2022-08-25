import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education-component',
  templateUrl: './education-component.component.html',
  styleUrls: ['./education-component.component.css'],
})
export class EducationComponentComponent implements OnInit {
  @Input() education: any;
  public educations: any;

  @Input() modeEdit: boolean = false;
  loading: boolean = true;

  ngOnInit(): void {
    this.getEducationsData();
  }

  getEducationsData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/education/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.educations = res.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        this.loading = false;
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
              text: res.data
            })
          })
          .catch((err) => {
            Swal.fire({
              text: err.message
            })
          });
      }
    });
  }
}

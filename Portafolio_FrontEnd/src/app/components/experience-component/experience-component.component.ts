import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.css'],
})
export class ExperienceComponentComponent implements OnInit {
  @Input() experience: any;
  public experiences: any;

  @Input() modeEdit: boolean = false;
  loading: boolean = true;

  ngOnInit(): void {
    this.getExperienceData();
  }

  getExperienceData() {
    const url = `https://backend-arg-progrma.herokuapp.com/user/experience/${1}`;
    axios
      .get(url)
      .then((res) => {
        this.experiences = res.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        this.loading = false;
      });
  }

  deleteExperience(ID: any) {
    Swal.fire({
      text: '¿Está seguro que quiere eliminar esta información?',
      confirmButtonText: 'Confirmar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://backend-arg-progrma.herokuapp.com/user/experience/delete/${1}/${ID}`;
        axios
          .delete(url)
          .then((res) => {
            Swal.fire({
              text: res.data,
            });
            window.location.reload();
          })
          .catch((err) => {
            Swal.fire({
              text: 'Por favor intente de nuevo'
            })
          });
      }
    });
  }
}

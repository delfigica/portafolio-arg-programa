import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyect-component',
  templateUrl: './proyect-component.component.html',
  styleUrls: ['./proyect-component.component.css'],
})
export class ProyectComponentComponent implements OnInit {
  @Input() modeEdit: boolean = false;
  @Input() loading: boolean;

  @Input() proyect: any;
  tecnologies: any;

  ngOnInit(): void {}

  deleteProyect(proyectId: any) {
    Swal.fire({
      text: '¿Está seguro que quiere eliminar esta información?',
      confirmButtonText: 'Confirmar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://backend-arg-progrma.herokuapp.com/user/proyect/delete/${1}/${proyectId}`;
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
            console.log(err)
          });
      }
    });
  }
}

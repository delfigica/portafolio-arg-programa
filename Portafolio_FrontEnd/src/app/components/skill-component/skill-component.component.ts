import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css'],
})
export class SkillComponentComponent implements OnInit {
  @Input() modeEdit: boolean = false;
  @Input() skill: any;

  loading: boolean = true;
  stroke: number;

  ngOnInit(): void {
    this.getPorcentage();

    if (this.skill !== undefined) {
      this.loading = false;
    }
  }

  getPorcentage() {
    const percentage = this.skill.percentage;
    this.stroke = Math.round(((100 - percentage) * 472) / 100);
  }

  deleteSkill(skillId: any) {
    Swal.fire({
      text: '¿Está seguro que quiere eliminar esta información?',
      confirmButtonText: 'Confirmar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://backend-arg-progrma.herokuapp.com/user/skill/delete/${1}/${
          skillId
        }`;
        axios.delete(url).then((res) => {
          Swal.fire({
            text: res.data,
          }).catch((err) => {
            Swal.fire({
              text: err.message,
            });
          });
        });
      }
    });
  }
}

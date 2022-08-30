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
  
  @Input() deleteEducation: Function;
    
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
}

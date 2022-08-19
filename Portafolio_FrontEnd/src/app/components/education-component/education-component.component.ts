import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-component',
  templateUrl: './education-component.component.html',
  styleUrls: ['./education-component.component.css'],
})
export class EducationComponentComponent implements OnInit {
  @Input() education: any;
  @Input() modeEdit: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

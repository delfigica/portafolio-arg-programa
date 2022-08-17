import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {
  descriptionInput: String;
  institutionInput: String;

  constructor() { }

  ngOnInit(): void {
  }

}

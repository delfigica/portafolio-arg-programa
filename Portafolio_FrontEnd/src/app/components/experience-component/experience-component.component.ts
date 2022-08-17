import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.css'],
})
export class ExperienceComponentComponent implements OnInit {
  @Input() experience: any;
  constructor() {}

  ngOnInit(): void {}

}

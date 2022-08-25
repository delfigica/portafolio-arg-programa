import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css'],
})
export class SkillComponentComponent implements OnInit {
  @Input() modeEdit: boolean = false;
  @Input() skill: any;

  stroke: number;

  ngOnInit(): void {
    this.getPorcentage();

    if (this.skill !== undefined) {
      this.loading = false;
    }
  }

  loading: boolean = true;

  getPorcentage() {
    const percentage = this.skill.percentage;
    this.stroke = Math.round(((100 - percentage) * 472) / 100);
  }
}

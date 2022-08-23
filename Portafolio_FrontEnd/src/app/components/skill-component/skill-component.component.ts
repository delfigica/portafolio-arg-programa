import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css'],
})
export class SkillComponentComponent implements OnInit {
  @Input() modeEdit: boolean = false;
  @Input() skill: any;

  skillName: string = "HTML";
  
  // @ts-ignore: Object is possibly 'null'.
  @ViewChild('HTML' , { static: false }) spinner: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.progress();
    console.log(this.spinner)
    if(this.skill !== undefined) {
      this.skillName = this.skill.name
    }
  }

  progress(){
    this.renderer.setStyle(this.spinner.nativeElement, 'stroke-dashoffset', 100)
  }
}

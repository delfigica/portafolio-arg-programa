import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css'],
})
export class SkillComponentComponent implements OnInit {
  @Input() skill: any;

  @ViewChild("circle", { static: false }) spinner: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.progress();
    console.log(this.spinner)
  }

  progress(){
    this.renderer.setStyle(this.spinner.nativeElement, 'stroke-dashoffset', 100)
  }
}

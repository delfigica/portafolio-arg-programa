import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectComponentComponent } from './proyect-component.component';

describe('ProyectComponentComponent', () => {
  let component: ProyectComponentComponent;
  let fixture: ComponentFixture<ProyectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

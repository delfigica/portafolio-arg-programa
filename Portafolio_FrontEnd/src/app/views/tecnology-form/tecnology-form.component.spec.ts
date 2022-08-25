import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologyFormComponent } from './tecnology-form.component';

describe('TecnologyFormComponent', () => {
  let component: TecnologyFormComponent;
  let fixture: ComponentFixture<TecnologyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

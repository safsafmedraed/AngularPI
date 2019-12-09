import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSchoolComponent } from './ajout-school.component';

describe('AjoutSchoolComponent', () => {
  let component: AjoutSchoolComponent;
  let fixture: ComponentFixture<AjoutSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

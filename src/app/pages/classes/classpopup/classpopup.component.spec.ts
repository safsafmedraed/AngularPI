import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasspopupComponent } from './classpopup.component';

describe('ClasspopupComponent', () => {
  let component: ClasspopupComponent;
  let fixture: ComponentFixture<ClasspopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasspopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

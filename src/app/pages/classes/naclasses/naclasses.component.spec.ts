import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaclassesComponent } from './naclasses.component';

describe('NaclassesComponent', () => {
  let component: NaclassesComponent;
  let fixture: ComponentFixture<NaclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

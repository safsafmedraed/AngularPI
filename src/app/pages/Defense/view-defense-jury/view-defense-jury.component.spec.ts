import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDefenseJuryComponent } from './view-defense-jury.component';

describe('ViewDefenseJuryComponent', () => {
  let component: ViewDefenseJuryComponent;
  let fixture: ComponentFixture<ViewDefenseJuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDefenseJuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDefenseJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

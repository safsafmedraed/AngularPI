import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListDefensesComponent } from './view-list-defenses.component';

describe('ViewListDefensesComponent', () => {
  let component: ViewListDefensesComponent;
  let fixture: ComponentFixture<ViewListDefensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListDefensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListDefensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

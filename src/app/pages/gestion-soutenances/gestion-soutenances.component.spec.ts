import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSoutenancesComponent } from './gestion-soutenances.component';

describe('GestionSoutenancesComponent', () => {
  let component: GestionSoutenancesComponent;
  let fixture: ComponentFixture<GestionSoutenancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSoutenancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSoutenancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

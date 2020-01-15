import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NadepartsComponent } from './nadeparts.component';

describe('NadepartsComponent', () => {
  let component: NadepartsComponent;
  let fixture: ComponentFixture<NadepartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NadepartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NadepartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

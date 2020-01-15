import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsDefenseComponent } from './view-details-defense.component';

describe('ViewDetailsDefenseComponent', () => {
  let component: ViewDetailsDefenseComponent;
  let fixture: ComponentFixture<ViewDetailsDefenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailsDefenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutsiteComponent } from './ajoutsite.component';

describe('AjoutsiteComponent', () => {
  let component: AjoutsiteComponent;
  let fixture: ComponentFixture<AjoutsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

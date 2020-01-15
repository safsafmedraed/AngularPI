import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutdepartComponent } from './ajoutdepart.component';

describe('AjoutdepartComponent', () => {
  let component: AjoutdepartComponent;
  let fixture: ComponentFixture<AjoutdepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutdepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutdepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

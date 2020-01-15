import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOptionComponent } from './ajout-option.component';

describe('AjoutOptionComponent', () => {
  let component: AjoutOptionComponent;
  let fixture: ComponentFixture<AjoutOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

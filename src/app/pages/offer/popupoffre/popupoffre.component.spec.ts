import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupoffreComponent } from './popupoffre.component';

describe('PopupoffreComponent', () => {
  let component: PopupoffreComponent;
  let fixture: ComponentFixture<PopupoffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

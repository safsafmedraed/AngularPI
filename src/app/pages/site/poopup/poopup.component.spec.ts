import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoopupComponent } from './poopup.component';

describe('PoopupComponent', () => {
  let component: PoopupComponent;
  let fixture: ComponentFixture<PoopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

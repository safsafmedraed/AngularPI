import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionpoppupComponent } from './optionpoppup.component';

describe('OptionpoppupComponent', () => {
  let component: OptionpoppupComponent;
  let fixture: ComponentFixture<OptionpoppupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionpoppupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionpoppupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

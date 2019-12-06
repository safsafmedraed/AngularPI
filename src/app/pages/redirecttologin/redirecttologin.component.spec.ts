import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirecttologinComponent } from './redirecttologin.component';

describe('RedirecttologinComponent', () => {
  let component: RedirecttologinComponent;
  let fixture: ComponentFixture<RedirecttologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirecttologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirecttologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

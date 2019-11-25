import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NourcheneComponent } from './nourchene.component';

describe('NourcheneComponent', () => {
  let component: NourcheneComponent;
  let fixture: ComponentFixture<NourcheneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NourcheneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NourcheneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

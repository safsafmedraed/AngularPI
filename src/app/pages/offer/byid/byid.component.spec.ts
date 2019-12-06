import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByidComponent } from './byid.component';

describe('ByidComponent', () => {
  let component: ByidComponent;
  let fixture: ComponentFixture<ByidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

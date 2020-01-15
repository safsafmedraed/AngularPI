import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasiteComponent } from './nasite.component';

describe('NasiteComponent', () => {
  let component: NasiteComponent;
  let fixture: ComponentFixture<NasiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

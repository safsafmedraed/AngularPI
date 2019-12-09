import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoptionsComponent } from './naoptions.component';

describe('NaoptionsComponent', () => {
  let component: NaoptionsComponent;
  let fixture: ComponentFixture<NaoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

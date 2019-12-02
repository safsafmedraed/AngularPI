import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaturePopupComponent } from './candidature-popup.component';

describe('CandidaturePopupComponent', () => {
  let component: CandidaturePopupComponent;
  let fixture: ComponentFixture<CandidaturePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidaturePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidaturePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

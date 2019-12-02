import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginentrepriseComponent } from './loginentreprise.component';

describe('LoginentrepriseComponent', () => {
  let component: LoginentrepriseComponent;
  let fixture: ComponentFixture<LoginentrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginentrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

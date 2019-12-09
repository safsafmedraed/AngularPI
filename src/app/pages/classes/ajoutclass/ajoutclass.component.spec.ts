import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutclassComponent } from './ajoutclass.component';

describe('AjoutclassComponent', () => {
  let component: AjoutclassComponent;
  let fixture: ComponentFixture<AjoutclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

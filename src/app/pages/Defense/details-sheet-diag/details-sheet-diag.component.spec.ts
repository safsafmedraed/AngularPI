import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSheetDiagComponent } from './details-sheet-diag.component';

describe('DetailsSheetDiagComponent', () => {
  let component: DetailsSheetDiagComponent;
  let fixture: ComponentFixture<DetailsSheetDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSheetDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSheetDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

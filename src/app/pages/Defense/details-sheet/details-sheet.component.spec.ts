import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSheetComponent } from './details-sheet.component';

describe('DetailsSheetComponent', () => {
  let component: DetailsSheetComponent;
  let fixture: ComponentFixture<DetailsSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

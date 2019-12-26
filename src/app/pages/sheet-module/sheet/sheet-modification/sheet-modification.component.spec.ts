import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetModificationComponent } from './sheet-modification.component';

describe('SheetModificationComponent', () => {
  let component: SheetModificationComponent;
  let fixture: ComponentFixture<SheetModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

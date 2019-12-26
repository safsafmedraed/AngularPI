import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetChildComponent } from './sheet-child.component';

describe('SheetChildComponent', () => {
  let component: SheetChildComponent;
  let fixture: ComponentFixture<SheetChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFileComponent } from './task-file.component';

describe('TaskFileComponent', () => {
  let component: TaskFileComponent;
  let fixture: ComponentFixture<TaskFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

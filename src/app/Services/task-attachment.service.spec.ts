import { TestBed } from '@angular/core/testing';

import { TaskAttachmentService } from './task-attachment.service';

describe('TaskAttachmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskAttachmentService = TestBed.get(TaskAttachmentService);
    expect(service).toBeTruthy();
  });
});

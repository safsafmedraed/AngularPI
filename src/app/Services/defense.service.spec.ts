import { TestBed } from '@angular/core/testing';

import { DefenseService } from './defense.service';

describe('DefenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefenseService = TestBed.get(DefenseService);
    expect(service).toBeTruthy();
  });
});

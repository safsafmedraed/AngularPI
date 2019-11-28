/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SheetServiceService } from './SheetService.service';

describe('Service: SheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheetServiceService]
    });
  });

  it('should ...', inject([SheetServiceService], (service: SheetServiceService) => {
    expect(service).toBeTruthy();
  }));
});

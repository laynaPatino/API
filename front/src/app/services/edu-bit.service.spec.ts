import { TestBed } from '@angular/core/testing';

import { EduBITService } from './edu-bit.service';

describe('EduBITService', () => {
  let service: EduBITService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduBITService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

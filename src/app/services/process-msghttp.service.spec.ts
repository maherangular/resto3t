import { TestBed } from '@angular/core/testing';

import { ProcessMSGHTTPService } from './process-msghttp.service';

describe('ProcessMSGHTTPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessMSGHTTPService = TestBed.get(ProcessMSGHTTPService);
    expect(service).toBeTruthy();
  });
});

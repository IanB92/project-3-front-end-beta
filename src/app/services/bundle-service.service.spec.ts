import { TestBed } from '@angular/core/testing';

import { BundleServiceService } from './bundle-service.service';

describe('BundleServiceService', () => {
  let service: BundleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

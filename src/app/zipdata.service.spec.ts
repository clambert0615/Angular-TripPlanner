import { TestBed } from '@angular/core/testing';

import { ZipdataService } from './zipdata.service';

describe('ZipdataService', () => {
  let service: ZipdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

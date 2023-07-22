import { TestBed } from '@angular/core/testing';

import { ShodanServiceService } from './shodan-service.service';

describe('ShodanServiceService', () => {
  let service: ShodanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShodanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

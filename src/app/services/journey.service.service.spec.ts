import { TestBed } from '@angular/core/testing';

import { JourneyServiceService } from './journey.service.service';

describe('JourneyServiceService', () => {
  let service: JourneyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourneyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

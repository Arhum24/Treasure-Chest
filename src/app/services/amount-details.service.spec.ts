import { TestBed } from '@angular/core/testing';

import { AmountDetailsService } from './amount-details.service';

describe('AmountDetailsService', () => {
  let service: AmountDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmountDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ConstantsService } from './services/constants.service';

describe('ConstantsService', () => {
  let service: ConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReturnsService } from './returns.service';

describe('ReturnsService', () => {
  let service: ReturnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

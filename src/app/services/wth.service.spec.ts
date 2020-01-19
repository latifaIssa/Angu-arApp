import { TestBed } from '@angular/core/testing';

import { WthService } from './wth.service';

describe('WthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WthService = TestBed.get(WthService);
    expect(service).toBeTruthy();
  });
});

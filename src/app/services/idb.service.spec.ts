import { TestBed } from '@angular/core/testing';

import { IdbService } from './idb.service';

describe('IdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdbService = TestBed.get(IdbService);
    expect(service).toBeTruthy();
  });
});

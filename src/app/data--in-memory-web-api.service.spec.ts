import { TestBed } from '@angular/core/testing';

import { DataInMemoryWebApiService } from './data--in-memory-web-api.service';

describe('DataInMemoryWebApiService', () => {
  let service: DataInMemoryWebApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataInMemoryWebApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

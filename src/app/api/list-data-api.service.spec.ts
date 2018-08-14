import { TestBed, inject } from '@angular/core/testing';

import { ListDataApiService } from './list-data-api.service';

describe('ListDataApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDataApiService]
    });
  });

  it('should be created', inject([ListDataApiService], (service: ListDataApiService) => {
    expect(service).toBeTruthy();
  }));
});

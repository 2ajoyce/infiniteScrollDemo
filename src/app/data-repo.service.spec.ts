import { TestBed, inject } from '@angular/core/testing';

import { DataRepoService } from './data-repo.service';

describe('DataRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataRepoService]
    });
  });

  it('should be created', inject([DataRepoService], (service: DataRepoService) => {
    expect(service).toBeTruthy();
  }));
});

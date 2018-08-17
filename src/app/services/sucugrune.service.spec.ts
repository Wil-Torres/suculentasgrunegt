import { TestBed, inject } from '@angular/core/testing';

import { SucugruneService } from './sucugrune.service';

describe('SucugruneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SucugruneService]
    });
  });

  it('should be created', inject([SucugruneService], (service: SucugruneService) => {
    expect(service).toBeTruthy();
  }));
});

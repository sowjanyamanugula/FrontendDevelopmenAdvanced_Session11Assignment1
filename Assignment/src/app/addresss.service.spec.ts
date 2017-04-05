import { TestBed, inject } from '@angular/core/testing';

import { AddresssService } from './addresss.service';

describe('AddresssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddresssService]
    });
  });

  it('should ...', inject([AddresssService], (service: AddresssService) => {
    expect(service).toBeTruthy();
  }));
});

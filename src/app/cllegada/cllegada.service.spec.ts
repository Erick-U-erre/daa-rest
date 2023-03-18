import { TestBed } from '@angular/core/testing';

import { CllegadaService } from './cllegada.service';

describe('CllegadaService', () => {
  let service: CllegadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CllegadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

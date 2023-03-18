import { TestBed } from '@angular/core/testing';

import { CanReservaService } from './can-reserva.service';

describe('CanReservaService', () => {
  let service: CanReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

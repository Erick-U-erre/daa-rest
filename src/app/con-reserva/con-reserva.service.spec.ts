import { TestBed } from '@angular/core/testing';

import { ConReservaService } from './con-reserva.service';

describe('ConReservaService', () => {
  let service: ConReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

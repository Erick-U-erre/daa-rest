import { TestBed } from '@angular/core/testing';

import { GreservasService } from './greservas.service';

describe('GreservasService', () => {
  let service: GreservasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreservasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

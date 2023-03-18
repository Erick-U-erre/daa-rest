import { TestBed } from '@angular/core/testing';

import { PreservaService } from './preserva.service';

describe('PreservaService', () => {
  let service: PreservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

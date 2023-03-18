import { TestBed } from '@angular/core/testing';

import { RegistrandoUsuarioService } from './registrando-usuario.service';

describe('RegistrandoUsuarioService', () => {
  let service: RegistrandoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrandoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

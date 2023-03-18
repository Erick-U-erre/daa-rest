import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrandoUsuarioComponent } from './registrando-usuario.component';

describe('RegistrandoUsuarioComponent', () => {
  let component: RegistrandoUsuarioComponent;
  let fixture: ComponentFixture<RegistrandoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrandoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrandoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

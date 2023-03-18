import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciandoSesionComponent } from './iniciando-sesion.component';

describe('IniciandoSesionComponent', () => {
  let component: IniciandoSesionComponent;
  let fixture: ComponentFixture<IniciandoSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciandoSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciandoSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

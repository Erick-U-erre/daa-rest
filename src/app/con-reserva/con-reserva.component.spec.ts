import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConReservaComponent } from './con-reserva.component';

describe('ConReservaComponent', () => {
  let component: ConReservaComponent;
  let fixture: ComponentFixture<ConReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanReservaComponent } from './can-reserva.component';

describe('CanReservaComponent', () => {
  let component: CanReservaComponent;
  let fixture: ComponentFixture<CanReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

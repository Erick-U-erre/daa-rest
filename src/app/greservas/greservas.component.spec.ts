import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GReservasComponent } from './greservas.component';

describe('GReservasComponent', () => {
  let component: GReservasComponent;
  let fixture: ComponentFixture<GReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

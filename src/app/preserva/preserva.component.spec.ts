import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PReservaComponent } from './preserva.component';

describe('PReservaComponent', () => {
  let component: PReservaComponent;
  let fixture: ComponentFixture<PReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

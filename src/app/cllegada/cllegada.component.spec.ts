import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLlegadaComponent } from './cllegada.component';

describe('CLlegadaComponent', () => {
  let component: CLlegadaComponent;
  let fixture: ComponentFixture<CLlegadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLlegadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLlegadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

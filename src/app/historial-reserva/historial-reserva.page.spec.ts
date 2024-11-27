import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialReservaPage } from './historial-reserva.page';

describe('HistorialReservaPage', () => {
  let component: HistorialReservaPage;
  let fixture: ComponentFixture<HistorialReservaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarReservaPage } from './editar-reserva.page';

describe('EditarReservaPage', () => {
  let component: EditarReservaPage;
  let fixture: ComponentFixture<EditarReservaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

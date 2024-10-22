import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialReservaPageRoutingModule } from './historial-reserva-routing.module';

import { HistorialReservaPage } from './historial-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialReservaPageRoutingModule
  ],
  declarations: [HistorialReservaPage]
})
export class HistorialReservaPageModule {}

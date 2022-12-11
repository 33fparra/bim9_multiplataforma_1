/* eslint-disable @typescript-eslint/quotes */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidaPageRoutingModule } from './bienvenida-routing.module';

import { BienvenidaPage } from './bienvenida.page';
import { MenuPageModule } from "../menu/menu.module";



@NgModule({
    declarations: [BienvenidaPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BienvenidaPageRoutingModule,
        MenuPageModule,
    ],
    schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
})
export class BienvenidaPageModule {}

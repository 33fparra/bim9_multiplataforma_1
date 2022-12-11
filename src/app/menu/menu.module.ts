import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

import { Routes, RouterModule } from '@angular/router'; //se agrega

const routes: Routes = [
  {
    path:'',
    component: MenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)//,
    //MenuPageRoutingModule
  ],
  exports:[MenuPage], /**con esto hago que el menu pueda ser usado externamente */
  declarations: [MenuPage]
})
export class MenuPageModule {}


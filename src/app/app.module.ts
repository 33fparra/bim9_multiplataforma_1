import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { environment } from 'src/environments/environment';
import { IonicStorageModule } from '@ionic/storage-angular';

import * as firebase from 'firebase/app';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

firebase.initializeApp(environment.firebase);



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    InAppBrowser,
    BarcodeScanner,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

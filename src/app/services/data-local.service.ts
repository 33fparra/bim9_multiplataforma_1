/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/contextual-lifecycle */
import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})

export class DataLocalService {

  guardados: Registro[] = [];


  constructor(private storage: Storage, private navCtrl: NavController, private inAppBrowser: InAppBrowser) {

  }
}


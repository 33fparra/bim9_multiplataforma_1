/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';
  password = '';

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }
}


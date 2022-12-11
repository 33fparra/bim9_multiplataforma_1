/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';


import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  // username: string = '';
  // password: string = '';
  // cpassword: string = '';

  constructor(public alertController: AlertController, private router: Router) {}
  ngOnInit() {
  }
}
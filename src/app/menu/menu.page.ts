import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  presionarMenu(){
    this.menuCtrl.toggle();
  }
  openMenu() {
    this.menuCtrl.open();
  }
 closeMenu() {
    this.menuCtrl.close();
  }
}

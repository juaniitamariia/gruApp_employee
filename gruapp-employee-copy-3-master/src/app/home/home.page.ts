import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor(public NavCtrl:NavController) { }

  ngOnInit() {
    setTimeout(() => {this.goHome();},4200);
    console.log("working");
  }

  goHome() {
    this.NavCtrl.navigateRoot("/tutorial");
  }

}

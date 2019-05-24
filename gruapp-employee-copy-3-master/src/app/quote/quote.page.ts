import { Component, OnInit } from '@angular/core';

import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit {

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }
  openPage() {

    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

     console.log(options);
    this.nativePageTransitions.slide(options);
    // this.navigate.navigateRoot("/quote");
  
  }

  goBack() {

    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

     console.log(options);
    this.nativePageTransitions.slide(options);
    // this.navigate.navigateRoot("/get-service");
  }
}

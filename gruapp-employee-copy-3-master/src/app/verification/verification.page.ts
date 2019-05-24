import { Component, OnInit } from '@angular/core';
import { GruproviderService } from "./../gruprovider.service";
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  constructor(public navigate: NavController, private nativePageTransitions: NativePageTransitions, public provider : GruproviderService) { }

  ngOnInit() {
    console.log(this.provider.email,
                this.provider.password,
                this.provider.phoneNumber,
                this.provider.company)
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
    this.navigate.navigateRoot("/add-towing");
  
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
    this.navigate.navigateRoot("/verify-password");
  
  }
 
}

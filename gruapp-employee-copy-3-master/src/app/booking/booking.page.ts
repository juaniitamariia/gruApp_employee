import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { GruproviderService } from '../gruprovider.service';
import * as Parse from 'parse';

let parse = require('parse');

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  serviceInfo : any;

  constructor(public navigate : NavController, public nativePageTransitions: NativePageTransitions,
              public provider : GruproviderService) { 
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
              }

  ngOnInit() {
    this.getInfo();
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
    this.navigate.navigateRoot("/get-service");
  
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
    this.navigate.navigateRoot("/get-service");
  
  }

  getInfo(){
    
    Parse.Cloud.run('getBooking',{serviceId: this.provider.serviceId}).then((result)=>
    {
      console.log(result);
      console.log(result.toJSON())
      var name = result.toJSON().get(result.name)
      console.log("nombre " + name)
      this.serviceInfo = result
    },
    (error)=>
    { 
      console.log(error);
    });

 
  }

}

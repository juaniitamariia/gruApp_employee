import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as Parse from 'parse';
import { GruproviderService } from "../gruprovider.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

let parse = require('parse');


@Component({
  selector: 'app-get-service',
  templateUrl: './get-service.page.html',
  styleUrls: ['./get-service.page.scss'],
})
export class GetServicePage implements OnInit {

  constructor(private geolocation: Geolocation, private locationAccuracy: LocationAccuracy, public menu: MenuController, public navigate : NavController, public nativePageTransitions: NativePageTransitions, public provider : GruproviderService) { 
    parse.serverURL = 'https://parseapi.back4app.com/';
    Parse.initialize("guMi91jQ9mwtDypMkb74aFyKPmI0sQN2CY9TPHW2", "qEd42GYwiQaSxPHkgST0XJXOFqeacdlz4vPYNZh8"); 
  }
  
  serviceRequests: object []
  length: number = 0

  ngOnInit() {
    console.log(this.provider.nombre);
    this.getCurrentLocation()
    // this.getServices()
  }

  openCustom(){
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  
  getCurrentLocation(){
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => console.log('Request successful'),
          error => console.log('Error requesting location permissions', error)
        );
      }
    
    });

    this.geolocation.getCurrentPosition().then((resp) => {
      this.provider.latitud = resp.coords.latitude
      this.provider.longitud = resp.coords.longitude
      console.log(this.provider.longitud)
      console.log(this.provider.latitud)
      this.getServices()
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
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
    this.navigate.navigateRoot("/booking");
  }

  openPage3() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 20,
      iosdelay: 100
     }

    console.log(options);
    this.nativePageTransitions.slide(options);
  }

  getServices(){
    Parse.Cloud.run('getServiceRequestsByDistance', { driverLatitud: this.provider.latitud, driverLongitud: this.provider.longitud }).then((response) => {
      for(let i = 0; i < response.length; i++){
        response[i] = response[i].toJSON();
      }
      this.serviceRequests = response;
      this.length = this.serviceRequests.length
      console.log(this.serviceRequests)
    }, (error) => {
      console.log(error);
    });
  }

  logOut() {
    Parse.User.logOut().then((resp) => {
      console.log('Logged out successfully', resp);
      this.openPage3();
      this.navigate.navigateRoot('/register');

    }, err => {
      //console.log('Error logging out', err);

    })
  }

  
}

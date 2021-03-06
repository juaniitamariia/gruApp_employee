import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
var UploadLicencePage = /** @class */ (function () {
    function UploadLicencePage(camera, alertController, navigate, nativePageTransitions) {
        this.camera = camera;
        this.alertController = alertController;
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    UploadLicencePage.prototype.ngOnInit = function () {
    };
    UploadLicencePage.prototype.openCamera = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    UploadLicencePage.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerta',
                            message: 'Sus documentos serán verificados.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.navigate.navigateRoot("/account");
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadLicencePage.prototype.openPage = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/account");
    };
    UploadLicencePage.prototype.goBack = function () {
        var options = {
            direction: 'right',
            duration: 400,
            slowdownfactor: -1,
            slidePixels: 20,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.slide(options);
        this.navigate.navigateRoot("/account");
    };
    UploadLicencePage = tslib_1.__decorate([
        Component({
            selector: 'app-upload-licence',
            templateUrl: './upload-licence.page.html',
            styleUrls: ['./upload-licence.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Camera, AlertController, NavController, NativePageTransitions])
    ], UploadLicencePage);
    return UploadLicencePage;
}());
export { UploadLicencePage };
//# sourceMappingURL=upload-licence.page.js.map
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { API_CONFIG } from '../config/api.config';
var JwtService = /** @class */ (function () {
    function JwtService(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
    }
    JwtService.prototype.authenticate = function (creds) {
        return this.httpClient.post(API_CONFIG.baseUrl + "/login", creds, {
            observe: 'response',
            responseType: 'text'
        });
    };
    JwtService.prototype.refreshToken = function () {
        return this.httpClient.post(API_CONFIG.baseUrl + "/auth/refresh_token", {}, {
            observe: 'response',
            responseType: 'text'
        });
    };
    JwtService.prototype.successFullLogin = function (authorizationValue) {
        var tok = authorizationValue.substring(7);
        var user = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocaluser(user);
    };
    JwtService.prototype.logout = function () {
        this.storage.setLocaluser(null);
    };
    JwtService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            StorageService])
    ], JwtService);
    return JwtService;
}());
export { JwtService };
//# sourceMappingURL=jwt.service.js.map
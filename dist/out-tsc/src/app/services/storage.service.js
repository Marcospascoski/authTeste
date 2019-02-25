import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.getLocalUser = function () {
        var user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user == null) {
            return null;
        }
        else {
            return JSON.parse(user);
        }
    };
    StorageService.prototype.setLocaluser = function (obj) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    };
    StorageService = tslib_1.__decorate([
        Injectable()
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=storage.service.js.map
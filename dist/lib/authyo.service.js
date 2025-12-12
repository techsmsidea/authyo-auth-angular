var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Injectable } from "@angular/core";
import { AuthyoClient } from "@authyo/auth-js";
import { from } from "rxjs";
import { AUTHYO_CONFIG } from "./authyo.token";
let AuthyoService = class AuthyoService {
    constructor(config) {
        this.client = new AuthyoClient(config);
    }
    getConfiguration() {
        return from(this.client.getConfiguration());
    }
    sendOtp(params) {
        return from(this.client.sendOtp(params));
    }
    verifyOtp(otp, maskId) {
        return from(this.client.verifyOtp(otp, maskId));
    }
    verifyToken(token) {
        return from(this.client.verifyToken(token));
    }
    revokeSession(token) {
        return from(this.client.revokeSession(token));
    }
};
AuthyoService = __decorate([
    Injectable({ providedIn: "root" }),
    __param(0, Inject(AUTHYO_CONFIG))
], AuthyoService);
export { AuthyoService };
//# sourceMappingURL=authyo.service.js.map
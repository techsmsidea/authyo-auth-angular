import { Inject, Injectable } from "@angular/core";
import { AuthyoClient, AuthyoClientConfig, AuthMethod, DeviceInfo } from "@authyo/auth-js";
import { from, Observable } from "rxjs";
import { AUTHYO_CONFIG } from "./authyo.token";

@Injectable({ providedIn: "root" })
export class AuthyoService {
  private readonly client: AuthyoClient;

  constructor(@Inject(AUTHYO_CONFIG) config: AuthyoClientConfig) {
    this.client = new AuthyoClient(config);
  }

  getConfiguration(): Observable<unknown> {
    return from(this.client.getConfiguration());
  }

  sendOtp(params: {
    to: string;
    authWay?: AuthMethod;
    otpLength?: number;
    expiry?: number;
    deviceInfo?: DeviceInfo;
  }): Observable<unknown> {
    return from(this.client.sendOtp(params));
  }

  verifyOtp(otp: string, maskId: string): Observable<unknown> {
    return from(this.client.verifyOtp(otp, maskId));
  }

  verifyToken(token: string): Observable<unknown> {
    return from(this.client.verifyToken(token));
  }

  revokeSession(token: string): Observable<unknown> {
    return from(this.client.revokeSession(token));
  }
}


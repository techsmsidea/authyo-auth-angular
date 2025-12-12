import { AuthyoClientConfig, AuthMethod, DeviceInfo } from "@authyo/auth-js";
import { Observable } from "rxjs";
export declare class AuthyoService {
    private readonly client;
    constructor(config: AuthyoClientConfig);
    getConfiguration(): Observable<unknown>;
    sendOtp(params: {
        to: string;
        authWay?: AuthMethod;
        otpLength?: number;
        expiry?: number;
        deviceInfo?: DeviceInfo;
    }): Observable<unknown>;
    verifyOtp(otp: string, maskId: string): Observable<unknown>;
    verifyToken(token: string): Observable<unknown>;
    revokeSession(token: string): Observable<unknown>;
}

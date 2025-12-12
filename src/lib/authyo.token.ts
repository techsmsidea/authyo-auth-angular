import { InjectionToken } from "@angular/core";
import { AuthyoClientConfig } from "@authyo/auth-js";

export const AUTHYO_CONFIG = new InjectionToken<AuthyoClientConfig>("AUTHYO_CONFIG");


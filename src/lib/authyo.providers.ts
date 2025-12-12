import { Provider } from "@angular/core";
import { AuthyoClient, AuthyoClientConfig } from "@authyo/auth-js";
import { AUTHYO_CONFIG } from "./authyo.token";
import { AuthyoService } from "./authyo.service";

export function provideAuthyo(config: AuthyoClientConfig): Provider[] {
  return [
    { provide: AUTHYO_CONFIG, useValue: config },
    {
      provide: AuthyoClient,
      useFactory: (cfg: AuthyoClientConfig) => new AuthyoClient(cfg),
      deps: [AUTHYO_CONFIG]
    },
    AuthyoService
  ];
}


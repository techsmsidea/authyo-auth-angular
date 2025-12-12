import { AuthyoClient } from "@authyo/auth-js";
import { AUTHYO_CONFIG } from "./authyo.token";
import { AuthyoService } from "./authyo.service";
export function provideAuthyo(config) {
    return [
        { provide: AUTHYO_CONFIG, useValue: config },
        {
            provide: AuthyoClient,
            useFactory: (cfg) => new AuthyoClient(cfg),
            deps: [AUTHYO_CONFIG]
        },
        AuthyoService
    ];
}
//# sourceMappingURL=authyo.providers.js.map
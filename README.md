# @authyo/auth-angular

Angular wrapper for the Authyo passwordless SDK. Depends on `@authyo/auth-js` and exposes an injectable `AuthyoService` plus `provideAuthyo` helper.

## Install

```bash
npm install @authyo/auth-js @authyo/auth-angular
# or
yarn add @authyo/auth-js @authyo/auth-angular
```

Peer dependencies: `@angular/core` (^16|^17|^18) and `rxjs` (^7).

## Setup

```ts
// app.config.ts (standalone) or app.module.ts
import { provideAuthyo } from "@authyo/auth-angular";
import { ApplicationConfig } from "@angular/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAuthyo({
      clientId: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
      baseUrl: "https://app.authyo.io" // optional, defaults to this
    })
  ]
};
```

## Use in a component/service

```ts
import { Component } from "@angular/core";
import { AuthyoService } from "@authyo/auth-angular";

@Component({
  selector: "app-auth",
  template: `<button (click)="send()">Send OTP</button>`
})
export class AuthComponent {
  constructor(private authyo: AuthyoService) {}

  send() {
    this.authyo
      .sendOtp({ to: "user@example.com", authWay: "Email", otpLength: 6 })
      .subscribe(res => console.log(res));
  }
}
```

## API (delegates to @authyo/auth-js)
- `getConfiguration()` — GET `/api/v1/user/getappcustomization`
- `sendOtp({ to, authWay, otpLength, expiry, deviceInfo })` — POST `/api/v1/auth/sendotp`
- `verifyOtp(otp, maskId)` — GET `/api/v1/auth/verifyotp`
- `verifyToken(token)` — POST `/api/v1/auth/verifytoken`
- `revokeSession(token)` — POST `/api/v1/auth/revokesession`

All requests include `clientId` / `clientSecret` in headers (configured via `provideAuthyo`).

## Build
- `npm run build` emits ESM + d.ts to `dist/`

## Notes
- Designed for Angular apps; uses RxJS `Observable` wrappers around the core SDK promises.
- Keep `clientSecret` server-side where possible; avoid exposing it in public client bundles you don’t control.

## License
MIT


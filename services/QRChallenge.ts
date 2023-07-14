import { init } from "@paralleldrive/cuid2";

export class QRChallenge {
  private generateToken: () => string;
  private _token: string;
  constructor(tokenLength?: number) {
    this.generateToken = init({
      length: tokenLength ?? 25,
    });
    this._token = this.generateToken();
  }

  get token(): string {
    return this._token;
  }

  resetToken(): void {
    this._token = this.generateToken();
  }
}

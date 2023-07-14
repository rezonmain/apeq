import { init } from "@paralleldrive/cuid2";

export class QRChallenge {
  private generateToken: () => string;
  constructor() {
    this.generateToken = init({
      length: 25,
    });
  }
}

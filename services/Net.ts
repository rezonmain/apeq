import { get } from "lodash";
import { networkInterfaces } from "os";
class Net {
  constructor() {}

  get localIP() {
    if (process.env.NODE_ENV !== "development")
      throw new Error("This method is only available in development mode");
    const interfaces = networkInterfaces();
    return get(interfaces, "en0[1].address");
  }

  get baseURL() {
    if (process.env.NODE_ENV === "development") {
      return `http://${this.localIP}:3000`;
    } else {
      return `https://${process.env.VERCEL_URL}`;
    }
  }
}

export { Net };

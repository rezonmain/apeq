import { get } from "lodash";
import { networkInterfaces } from "os";
class Net {
  constructor() {}

  getLocalIP() {
    const interfaces = networkInterfaces();
    return get(interfaces, "en0[1].address");
  }
}

export { Net };

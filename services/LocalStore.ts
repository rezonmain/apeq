import { AppLocalStore } from "@/types/AppLocalStore";

class LocalStore implements AppLocalStore {
  store: Map<keyof AppLocalStore, any>;
  constructor() {
    this.store = new Map();
  }

  private getIt(key: keyof AppLocalStore) {
    if (this.store.has(key)) return this.store.get(key);
    const v = localStorage.getItem(key);
    if (v) {
      this.store.set(key, JSON.parse(v).v);
    }
    return v !== null ? JSON.parse(v).v : null;
  }

  private setIt(key: keyof AppLocalStore, value: unknown) {
    const carrierObj = { v: value };
    localStorage.setItem(key, JSON.stringify(carrierObj));
    this.store.set(key, value);
  }

  get deviceIs() {
    return this.getIt("deviceIs");
  }

  set deviceIs(value: Required<AppLocalStore["deviceIs"]>) {
    this.setIt("deviceIs", value);
  }

  get uid() {
    return this.getIt("uid");
  }

  set uid(value: Required<AppLocalStore["uid"]>) {
    this.setIt("uid", value);
  }
}

export { LocalStore };

import { randomBytes } from "crypto";

/**
 * Returns true for empty values, check .spec for details.
 * @param value
 * @returns
 */
const isNothing = (value: unknown): boolean => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === "string" && value.trim() === "") {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  }
  if (typeof value === "number" && isNaN(value)) {
    return true;
  }
  if (Array.isArray(value) && value.every((v) => isNothing(v))) {
    return true;
  }
  return false;
};

const gid = (length = 100) => {
  if (typeof window !== "undefined") {
    return Array.from(
      window.crypto.getRandomValues(new Uint8Array(length / 2)),
      (n) => n.toString(16).padStart(2, "0")
    ).join("");
  }
  return randomBytes(length).toString("hex");
};

export { isNothing, gid };

"use client";
import { AppLocalStore } from "@/types/AppLocalStore";
import { useLocalStore } from "./useLocalStore";
import { isNothing } from "@/utils/_";
import { useRouter } from "next/navigation";

/**
 * Expose get function that fetches the value of a key from the local store.
 * This values must exist, otherwise the user will be redirected
 * @param redirectToIfMissing
 */
const useEssentials = (redirectToIfMissing = "/") => {
  const router = useRouter();
  const { store } = useLocalStore();
  const get = <T = string>(key: keyof AppLocalStore) => {
    const value = store[key];
    if (isNothing(value)) {
      router.push(redirectToIfMissing);
      return "";
    }
    return value as T;
  };
  return { get };
};

export { useEssentials };

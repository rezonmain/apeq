"use client";
import { LocalStore } from "@/services/LocalStore";
import { useRef } from "react";

const useLocalStore = () => {
  const storeRef = useRef(new LocalStore());
  return { store: storeRef.current };
};

export { useLocalStore };

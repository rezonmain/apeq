"use client";
import PageLoad from "@/components/PageLoad/PageLoad";
import { useLocalStore } from "@/hooks/useLocalStore";
import { useRouter } from "next-intl/client";
import { useEffect } from "react";

export default function Home() {
  const { store } = useLocalStore();
  const router = useRouter();

  useEffect(() => {
    if (!store.deviceIs || !store.uid) return router.push("/get-started");
    return router.push(`/${store.deviceIs}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <PageLoad />;
}

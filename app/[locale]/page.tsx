"use client";
import PageLoad from "@/components/PageLoad/PageLoad";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next-intl/client";
import { useEffect } from "react";
import { useReadLocalStorage } from "usehooks-ts";

export default function Home() {
  const { isSignedIn } = useAuth();
  const deviceIs = useReadLocalStorage<"player" | "controller">("deviceIs");
  const router = useRouter();
  useEffect(() => {
    if (!isSignedIn || !deviceIs) return router.push("/get-started");
    deviceIs === "player" ? router.push("/play") : router.push("/control");
  }, [isSignedIn, router, deviceIs]);
  return <PageLoad />;
}

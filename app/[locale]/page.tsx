"use client";
import PageLoad from "@/components/PageLoad/PageLoad";
import { useLocalStore } from "@/hooks/useLocalStore";
import { gid } from "@/utils/_";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next-intl/client";
import { useEffect } from "react";

interface HomeProps {
  searchParams: { auth: boolean };
}

export default function Home({ searchParams: p }: HomeProps) {
  const { userId } = useAuth();
  const { store } = useLocalStore();
  const router = useRouter();

  useEffect(() => {
    // The auth = true param is only provided when the user successfully signed in
    if (p.auth && userId) store.uid = userId;
    // If neither the deviceIs or uid is set (first visit), redirect the user to the get-started page
    if (!store.deviceIs || !store.uid) return router.push("/get-started");
    // If the user is signed in and or has set an uid, redirect them to their corresponding page
    return router.push(`/${store.deviceIs}?p=${gid()}&uid=${store.uid}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <PageLoad />;
}

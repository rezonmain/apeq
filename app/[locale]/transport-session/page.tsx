"use client";
import PageLoad from "@/components/PageLoad/PageLoad";
import { usePubSub } from "@/hooks/usePubSub";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TransportSession({
  searchParams,
}: {
  searchParams: { t: string };
}) {
  const router = useRouter();
  const { userId } = useAuth();
  const { pub } = usePubSub({ channel: searchParams.t });

  useEffect(() => {
    if (!userId) return router.push("/sign-in");
    setTimeout(() => {
      pub["client-successful-auth"](userId);
      router.push("/");
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <PageLoad />;
}

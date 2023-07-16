"use client";
import { SignIn, useAuth, useSignIn } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SignInSkeleton from "../SignInSkeleton/SignInSkeleton";

export default function ClientSignIn({ t }: { t: string | undefined }) {
  const { isSignedIn } = useAuth();
  const { isLoaded } = useSignIn();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && t) router.push(`/transport-session?t=${t}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn, t]);

  return (
    <>
      <div className="flex flex-row ">
        {!isLoaded && <SignInSkeleton />}
        {!isSignedIn && (
          <SignIn afterSignInUrl={t ? `/transport-session?t=${t}` : "/"} />
        )}
      </div>
    </>
  );
}

"use client";
import { SignIn, useAuth, useSignIn } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SignInSkeleton from "../SignInSkeleton/SignInSkeleton";
import { useLocalStore } from "@/hooks/useLocalStore";

export default function ClientSignIn({ t }: { t: string | undefined }) {
  const { isSignedIn, isLoaded: isLoadedAuth } = useAuth();
  const { store } = useLocalStore();
  const { isLoaded } = useSignIn();
  const router = useRouter();

  useEffect(() => {
    // Wait for the auth object to load
    if (!isLoadedAuth) return;
    // If the user arrived here with a t param, they are a control device
    if (t) store.deviceIs = "control";
    // If the user is signed in and has a t param, redirect them transport-session
    if (isSignedIn && t) return router.push(`/transport-session?t=${t}`);
    // If the user is signed but no t params provided just redirected them to the home page
    if (isSignedIn) return router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn, t, isLoadedAuth]);

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

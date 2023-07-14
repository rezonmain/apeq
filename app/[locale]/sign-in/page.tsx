import GoBackButton from "@/ui/components/GoBackButton/GoBackButton";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <article className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <GoBackButton href="/get-started" />
      </div>
      <div>
        <SignIn />
      </div>
    </article>
  );
}

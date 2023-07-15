import ClientSignIn from "@/components/ClientSignIn/ClientSignIn";
import GoBackButton from "@/components/GoBackButton/GoBackButton";

export default function SignInPage({
  searchParams,
}: {
  searchParams: { t: string };
}) {
  return (
    <article className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <GoBackButton href="/get-started" />
      </div>
      <ClientSignIn t={searchParams.t} />
    </article>
  );
}

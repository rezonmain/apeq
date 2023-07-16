import ClientSignIn from "@/components/ClientSignIn/ClientSignIn";
import GoBackButton from "@/components/GoBackButton/GoBackButton";
export default function SignInPage({
  searchParams,
}: {
  searchParams: { t: string };
}) {
  return (
    <article className="h-screen w-[400px] mx-auto flex items-center flex-col justify-center">
      <div className="self-start mb-5">
        <GoBackButton href="/get-started" />
      </div>
      <ClientSignIn t={searchParams.t} />
    </article>
  );
}

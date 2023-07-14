import Spinner from "@/ui/Spinner/Spinner";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  router.push("/get-started");
  return <Spinner />;
}

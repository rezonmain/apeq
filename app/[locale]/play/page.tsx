import Youtube from "@/components/Youtube/Youtube";

export default async function PlayPage({
  searchParams: p,
}: {
  searchParams: { uid: string };
}) {
  const activeList = "PL3ZQ5CpNulQmRw6pWc5Yx8XVt0kmi5BQ-";

  return <Youtube webSocketChannel={p.uid} activeList={activeList} />;
}

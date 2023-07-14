export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-screen bg-black text-white p-4">
      {children}
    </section>
  );
}

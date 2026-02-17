export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      {children}
    </section>
  );
}
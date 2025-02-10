import Header from "@/components/layout/Header/Header";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        {children}
    </>
  );
}

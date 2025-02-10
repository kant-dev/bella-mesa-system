
export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h1>Private</h1>
        {children}
    </>
  );
}

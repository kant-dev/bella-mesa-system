
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <h1>Public</h1>
        {children}
      </>
  );
}


export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="grow">
        <div className="sticky top-0 z-10 bg-background py-2 pl-2.5">
        </div>
        {children}
      </div>
    </div>
  );
}

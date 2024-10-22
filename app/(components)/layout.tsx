import BackLink from "@/components/BackLink";
import RightSidebar from "@/components/RightSidebar";

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="flex-grow">
        <div className="pl-2.5">
          <BackLink />
        </div>
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto scrollbar-hide ">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="rounded-lg bg-background p-8 shadow-sm space-y-5">
          <p className="text-muted-foreground mb-4">
            This is the main content area. You can add your dashboard components, charts, tables, or any other content here.
          </p>
          {/* Example content to demonstrate scrolling */}
        </div>
      </div>
    </main>
  );
}

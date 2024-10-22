interface Steps {
  title: string;
  description: string | React.ReactNode;
}

export default function Steps({ steps }: { steps: Steps[] }) {
  return (
    <div className="space-y-8">
      <div className="relative space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex relative">
            {index < steps.length - 1 && <div className="absolute top-8 left-4 -bottom-6 w-0.5 bg-neutral-600" aria-hidden="true" />}
            <div className="flex-shrink-0 mr-4 relative z-10">
              <div className="flex items-center justify-center w-8 h-8 border-2 border-neutral-600 rounded-full bg-background" aria-hidden="true">
                <span className="text-sm font-medium text-primary">{index + 1}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-1 pb-8">
              <h3 className="text-lg font-medium leading-6">{step.title}</h3>
              <span className="text-muted-foreground">{step.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

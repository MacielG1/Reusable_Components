import { switches } from "@/lib/const";
import ShowComponent from "@/components/ShowComponent";

export default function SwitchesPage() {
  return (
    <div className="flex justify-center gap-5 p-4">
      <div className="grid grid-cols-1 justify-center gap-12 p-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {switches.map((componentName) => (
          <ShowComponent
            key={componentName.filename}
            source="Switches"
            componentName={componentName.filename}
            className="text-center"
            href={componentName.link}
            name={componentName.name}
          />
        ))}
      </div>
    </div>
  );
}

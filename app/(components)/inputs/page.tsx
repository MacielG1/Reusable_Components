import { inputs } from "@/lib/const";
import ShowComponent from "@/components/ShowComponent";

export default function InputPage() {
  return (
    <div className="flex justify-center gap-5 p-4">
      <div className="grid grid-cols-2 justify-center gap-12 p-4 sm:grid-cols-3 md:grid-cols-4">
        {inputs.map((componentName) => {
          return (
            <ShowComponent
              key={componentName.filename}
              source="Inputs"
              componentName={componentName.filename}
              className="text-center"
              href={componentName.link}
              name={componentName.name}
            />
          );
        })}
      </div>
    </div>
  );
}

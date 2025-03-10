import { inputs } from "@/lib/const";
import ShowComponent from "@/components/ShowComponent";

export default function InputPage() {
  return (
    <div className="flex justify-center gap-5 p-4">
      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 place-items-center gap-12 p-4 min-[850px]:grid-cols-3 min-[1200px]:grid-cols-4">
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

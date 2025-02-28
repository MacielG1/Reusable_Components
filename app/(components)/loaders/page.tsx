import { loaders } from "@/lib/const";
import ShowComponent from "@/components/ShowComponent";

export default function LoadersPage() {
  return (
    <div className="flex justify-center gap-5 p-4">
      <div className="grid grid-cols-1 place-items-center gap-12 p-4 sm:grid-cols-3 md:grid-cols-4">
        {loaders.map((componentName) => {
          return (
            <ShowComponent
              key={componentName.filename}
              source="Loaders"
              componentName={componentName.filename}
              className="text-center"
              href={componentName.link}
              name={componentName.name}
            >
              {componentName.name}
            </ShowComponent>
          );
        })}
      </div>
    </div>
  );
}

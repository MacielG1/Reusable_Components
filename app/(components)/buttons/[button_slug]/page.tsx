import SubComponent from "@/components/SubComponent";
import { buttons } from "@/lib/const";
import getComponentCode from "@/lib/getComponentCode";

export default async function Page({ params }: { params: { button_slug: string } }) {
  const buttonSlug = (await params).button_slug;

  const ButtonData = buttons.find((button) => button.link === `/buttons/${buttonSlug}`);

  if (!ButtonData) {
    return <div>Button not found</div>;
  }

  const code = (await getComponentCode({ source: "Buttons", componentName: ButtonData.filename })) || "";

  return <SubComponent componentData={ButtonData} code={code} source="Buttons" />;
}

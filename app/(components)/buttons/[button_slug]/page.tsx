import SubComponent from "@/components/SubComponent";
import { buttons } from "@/lib/const";
import getComponentCode from "@/lib/getComponentCode";

type Props = {
  params: {
    button_slug: string;
  };
};

export default async function page(props: { params: Promise<{ button_slug: string }> }) {
  const params = await props.params;
  const buttonSlug = params.button_slug;

  const ButtonData = buttons.find((button) => button.link === `/buttons/${buttonSlug}`);

  if (!ButtonData) {
    return <div>Button not found</div>;
  }

  const code = await getComponentCode({ source: "Buttons", componentName: ButtonData.filename }) || "";

  return <SubComponent componentData={ButtonData} code={code} source="Buttons" />;
}

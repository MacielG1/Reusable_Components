import SubComponent from "@/components/SubComponent";
import { inputs } from "@/lib/const";
import getComponentCode from "@/lib/getComponentCode";

export default async function Page({ params }: { params: { input_slug: string } }) {
  const inputSlug = (await params).input_slug;

  const InputData = inputs.find((input) => input.link === `/inputs/${inputSlug}`);

  if (!InputData) {
    return <div>Button not found</div>;
  }

  const code = (await getComponentCode({ source: "Inputs", componentName: InputData.filename })) || "";

  return <SubComponent componentData={InputData} code={code} source="Inputs" />;
}

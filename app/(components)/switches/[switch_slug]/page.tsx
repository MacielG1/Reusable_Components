import SubComponent from "@/components/SubComponent";
import { switches } from "@/lib/const";
import getComponentCode from "@/lib/getComponentCode";

export default async function page(props: { params: Promise<{ switch_slug: string }> }) {
  const params = await props.params;
  const switchSlug = params.switch_slug;

  const SwitchData = switches.find((switches) => switches.link === `/switches/${switchSlug}`);

  if (!SwitchData) {
    return <div>Button not found</div>;
  }

  const code = (await getComponentCode({ source: "Switches", componentName: SwitchData.filename })) || "";

  return <SubComponent componentData={SwitchData} code={code} source="Switches" />;
}

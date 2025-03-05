import SubComponent from "@/components/SubComponent";
import { buttons, loaders } from "@/lib/const";
import getComponentCode from "@/lib/getComponentCode";

export default async function page(props: { params: Promise<{ loader_slug: string }> }) {
  const params = await props.params;
  const loaderSlug = params.loader_slug;

  const LoaderData = loaders.find((loader) => loader.link === `/loaders/${loaderSlug}`);

  if (!LoaderData) {
    return <div>Loader not found</div>;
  }

  const code = (await getComponentCode({ source: "Loaders", componentName: LoaderData.filename })) || "";

  return <SubComponent componentData={LoaderData} code={code} source="Loaders" />;
}

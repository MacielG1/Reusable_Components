"use server";
import path from "path";
import fs from "fs/promises";

type Props = {
  source: string;
  componentName: string;
};

export default async function getComponentCode({ source, componentName }: Props) {
  try {
    const file = path.join(process.cwd(), "components", source, `${componentName}.tsx`);
    return await fs.readFile(file, "utf8");
  } catch (error) {
    return console.log(`Error reading ${componentName} - ${(error as Error).message}`);
  }
}

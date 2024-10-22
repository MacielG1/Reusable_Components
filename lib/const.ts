import CenterFillButton, { CenterFillButtonCode, CenterFillButtonVariations } from "@/components/Buttons/CenterFillButton";
import Button3D, { Button3DCode, Button3DVariations } from "@/components/Buttons/Button3D";
import BorderFollowButton, { BorderFollowButtonCode, BorderFollowButtonVariations } from "@/components/Buttons/BorderFollowButton";
import FillButton, { FillButtonCode, FillButtonVariations } from "@/components/Buttons/FillButton";
import GradientButton, { GradientButtonCode, GradientButtonVariations } from "@/components/Buttons/GradientButton";
import HoverRingButton from "@/components/Buttons/HoverRingButton";
import { HoverRingButtonCode } from "@/components/Buttons/HoverRingButton";
import { HoverRingButtonVariations } from "@/components/Buttons/HoverRingButton";
import WaveButton, { WaveButtonCode, WaveButtonVariations } from "@/components/Buttons/WaveButton";
import SpotlightButton, { SpotlightButtonVariations, SpotlightButtonCode } from "@/components/Buttons/SpotLight";
import PulsatingButton, { PulsatingButtonCode, PulsatingButtonVariations } from "@/components/Buttons/PulsatingButton";
import LeanButton, { LeanButtonCode, LeanButtonVariations } from "@/components/Buttons/LeanButton";
import TextInput from "@/components/Inputs/TextInput";
import PasswordInput from "@/components/Inputs/PasswordInput";
import EmailInput from "@/components/Inputs/EmailInput";
import NumberInput from "@/components/Inputs/AdvancedNumberInput";

export const packageManagers = [
  { name: "npm", command: "npm i" },
  { name: "bun", command: "bun add" },
  { name: "pnpm", command: "pnpm add" },
  { name: "yarn", command: "yarn add" },
  { name: "deno", command: "deno add" },
] as const;

export type PackageManager = (typeof packageManagers)[number];

type ButtonProps = {
  [key: string]: {
    component: React.ComponentType<any>;
    code: string;
    props: any;
    test: string;
    variations: { label: string; props: any }[];
    dependencies: string[];
  };
};

export const buttons: ButtonProps = {
  "3d-button": {
    component: Button3D,
    code: Button3DCode,
    props: {},
    test: "3D Button",
    variations: Button3DVariations,
    dependencies: [],
  },
  "center-fill-button": {
    component: CenterFillButton,
    code: CenterFillButtonCode,
    props: {},
    test: "Center Fill",
    variations: CenterFillButtonVariations,
    dependencies: [],
  },
  "border-follow-button": {
    component: BorderFollowButton,
    code: BorderFollowButtonCode,
    props: {},
    test: "Border Follow",
    variations: BorderFollowButtonVariations,
    dependencies: [],
  },
  "fill-button": {
    component: FillButton,
    code: FillButtonCode,
    props: {},
    test: "Fill Button",
    variations: FillButtonVariations,
    dependencies: [],
  },
  "gradient-button": {
    component: GradientButton,
    code: GradientButtonCode,
    props: { from: "from-purple-700", to: "to-indigo-500" },
    test: "Gradient",
    variations: GradientButtonVariations,
    dependencies: [],
  },
  "hover-ring-button": {
    component: HoverRingButton,
    code: HoverRingButtonCode,
    props: {},
    test: "Hover Ring",
    variations: HoverRingButtonVariations,
    dependencies: [],
  },
  "Wave-button": {
    component: WaveButton,
    code: WaveButtonCode,
    props: {},
    test: "Wave",
    variations: WaveButtonVariations,
    dependencies: [],
  },
  "spotlight-button": {
    component: SpotlightButton,
    code: SpotlightButtonCode,
    props: {},
    test: "Spotlight",
    variations: SpotlightButtonVariations,
    dependencies: [],
  },
  "wave-button": {
    component: WaveButton,
    code: WaveButtonCode,
    props: {},
    test: "Wave",
    variations: WaveButtonVariations,
    dependencies: [],
  },
  "pulsating-button": {
    component: PulsatingButton,
    code: PulsatingButtonCode,
    props: {},
    test: "Pulsating",
    variations: PulsatingButtonVariations,
    dependencies: [],
  },
  "lean-button": {
    component: LeanButton,
    code: LeanButtonCode,
    props: {},
    test: "Lean",
    variations: LeanButtonVariations,
    dependencies: [],
  },
};

type InputProps = {
  [key: string]: {
    component: React.ComponentType<any>;
    props: any;
    test: string;
  };
};

export const inputs: InputProps = {
  "text-input": {
    component: TextInput,
    props: { placeholder: "Text Input" },
    test: "Text Input",
  },
  "password-input": {
    component: PasswordInput,
    props: { placeholder: "Password Input" },
    test: "Password Input",
  },
  "email-input": {
    component: EmailInput,
    props: { placeholder: "Email Input" },
    test: "Email Input",
  },
  "number-input": {
    component: NumberInput,
    props: { placeholder: "Number Input" },
    test: "Number Input",
  },
};

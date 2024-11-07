export const packageManagers = [
  { name: "npm", command: "npm i" },
  { name: "bun", command: "bun add" },
  { name: "pnpm", command: "pnpm add" },
  { name: "yarn", command: "yarn add" },
  { name: "deno", command: "deno add" },
] as const;

export type PackageManager = (typeof packageManagers)[number];

export const buttons = [
  { filename: "FollowBorderButton", name: "Follow Border", link: "/buttons/follow-border-button", variations: [{ label: "Default", props: {} }] },
  {
    filename: "Button3D",
    name: "3D Button",
    link: "/buttons/3d-button",
    variations: [
      { label: "Default", props: {} },
      { label: "Rounded", props: { className: "rounded-full" } },
    ],
    dependencies: [],
  },
  {
    filename: "CenterFillButton",
    name: "Center Fill",
    link: "/buttons/center-fill-button",
    variations: [
      { label: "Default", props: {} },
      { label: "Reverse", props: { mode: "reverse" } },
    ],
    dependencies: [],
  },
  {
    filename: "FillButton",
    name: "Fill Button",
    link: "/buttons/fill-button",
    variations: [
      { label: "Left", props: { direction: "left" } },
      { label: "Right", props: { direction: "right" } },
      { label: "Top", props: { direction: "top" } },
      { label: "Bottom", props: { direction: "bottom" } },
    ],
    dependencies: [],
  },
  {
    filename: "GradientButton",
    name: "Gradient",
    link: "/buttons/gradient-button",
    variations: [
      { label: "Left to Right", props: { direction: "bg-gradient-to-r", from: "from-indigo-900", to: "to-blue-500" } },
      { label: "From-Via-To", props: { from: "from-indigo-900", via: "via-blue-500", to: "to-pink-500" } },
      { label: "Top to Bottom", props: { direction: "bg-gradient-to-b", from: "from-green-800", to: "to-green-500" } },
      { label: "Top Left to Bottom Right", props: { direction: "bg-gradient-to-br", from: "from-orange-700", to: "to-pink-900" } },
    ],
    dependencies: [],
  },
  { filename: "HoverRingButton", name: "Hover Ring", link: "/buttons/hover-ring-button", variations: [{ label: "Default", props: {} }] },
  {
    filename: "LeanButton",
    name: "Lean",
    link: "/buttons/lean-button",
    variations: [
      { label: "Default", props: {} },
      { label: "Lean Left", props: { direction: "left" } },
    ],
    dependencies: [],
  },
  {
    filename: "LineButton",
    name: "Hover Line",
    link: "/buttons/line-button",
    variations: [
      { label: "Bottom Left", props: { direction: "left", position: "bottom" } },
      { label: "Bottom Right", props: { direction: "right", position: "bottom" } },
      { label: "Bottom Center", props: { direction: "center", position: "bottom" } },
      { label: "Top Left", props: { direction: "left", position: "top" } },
      { label: "Top Right", props: { direction: "right", position: "top" } },
      { label: "Top Center", props: { direction: "center", position: "top" } },
    ],
    dependencies: [],
  },
  {
    filename: "PulsatingButton",
    name: "Pulsating",
    link: "/buttons/pulsating-button",
    variations: [
      { label: "Default", props: { speed: "slow" } },
      { label: "Fast", props: { speed: "fast" } },
    ],
    dependencies: [],
  },
  {
    filename: "SpotlightButton",
    name: "Spotlight",
    link: "/buttons/spotlight-button",
    variations: [{ label: "Default", props: {} }],
    dependencies: [],
  },
  {
    filename: "WaveButton",
    name: "Wave",
    link: "/buttons/wave-button",
    variations: [
      { label: "Default", props: { speed: "slow" } },
      { label: "Fast", props: { speed: "fast" } },
    ],
    dependencies: [],
  },
  {
    filename: "BorderAnimatedButton",
    name: "Border Animated",
    link: "/buttons/border-animated-button",
    variations: [{ label: "Default", props: {} }],
    dependencies: [],
  },
];

export const inputs = [
  { filename: "TextInput", name: "Text Input", link: "/inputs/text-input" },
  { filename: "EmailInput", name: "Email Input", link: "/inputs/email-input" },
  {
    filename: "PasswordInput",
    name: "Password Input",
    link: "/inputs/password-input",
    dependencies: ["lucide-react"],
  },
  { filename: "LimitedTextInput", name: "Limited Text", link: "/inputs/limited-text-input" },
  {
    filename: "TextAreaInput",
    name: "Textarea",
    link: "/inputs/textarea-input",
  },
  { filename: "AutoGrowTextArea", name: "Auto Grow Textarea", link: "/inputs/auto-grow-textarea" },
  {
    filename: "SearchInput",
    name: "Search Input",
    link: "/inputs/search-input",
    dependencies: ["lucide-react"],
  },
  {
    filename: "NumberInput",
    name: "Number Input",
    link: "/inputs/number-input",
    dependencies: ["lucide-react"],
  },
  { filename: "ColorInput", name: "Color Input", link: "/inputs/color-input" },
  { filename: "RangeInput", name: "Range Input", link: "/inputs/range-input" },
  {
    filename: "DateInput",
    name: "Date Input",
    link: "/inputs/date-input",
    dependencies: ["lucide-react"],
  },
  { filename: "FollowBorderInput", name: "Follow Border Input", link: "/inputs/follow-border-input" },
];

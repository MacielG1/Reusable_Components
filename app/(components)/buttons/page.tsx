"use client";
import Link from "next/link";
import Button3D from "@/components/Buttons/Button3D";
import CenterFillButton from "@/components/Buttons/CenterFillButton";
import FillButton from "@/components/Buttons/FillButton";
import GradientButton from "@/components/Buttons/GradientButton";
import HoverRingButton from "@/components/Buttons/HoverRingButton";
import LineButton from "@/components/Buttons/LineButton";
import PulsatingButton from "@/components/Buttons/PulsatingButton";
import WaveButton from "@/components/Buttons/WaveButton";
import SpotlightButton from "@/components/Buttons/SpotLight";
import BorderFollowButton from "@/components/Buttons/BorderFollowButton";
import LeanButton from "@/components/Buttons/LeanButton";

export default function ButtonPage() {
  return (
    <div className="flex justify-center gap-5 p-4">
      <div className="grid grid-cols-2 place-items-center gap-12 p-4 sm:grid-cols-3 md:grid-cols-4">
        <Link href="/buttons/3d-button">
          <Button3D tabIndex={-1}>3D Button</Button3D>
        </Link>
        <Link href="/buttons/center-fill-button" tabIndex={-1}>
          <CenterFillButton>Center Fill</CenterFillButton>
        </Link>
        <Link href="/buttons/border-follow-button" tabIndex={-1}>
          <BorderFollowButton>Follow Border</BorderFollowButton>
        </Link>
        <Link href="/buttons/fill-button" tabIndex={-1}>
          <FillButton direction="top">Fill Button</FillButton>
        </Link>

        <Link href="/buttons/pulsating-button" tabIndex={-1}>
          <PulsatingButton>Pulsating </PulsatingButton>
        </Link>

        <Link href="/buttons/line-button" tabIndex={-1}>
          <LineButton direction="left" position="bottom">
            Hover Line
          </LineButton>
        </Link>
        <Link href="/buttons/wave-button" tabIndex={-1}>
          <WaveButton className="px-8 py-3">Wave</WaveButton>
        </Link>
        <Link href="/buttons/gradient-button" tabIndex={-1}>
          <GradientButton from="from-purple-700" to="to-indigo-500" className="px-5">
            Gradient
          </GradientButton>
        </Link>
        <Link href="/buttons/lean-button" tabIndex={-1}>
          <LeanButton className="px-8 py-2.5">Lean</LeanButton>
        </Link>
        <Link href="/buttons/spotlight-button" tabIndex={-1}>
          <SpotlightButton>Spotlight</SpotlightButton>
        </Link>
        <Link href="/buttons/hover-ring-button" tabIndex={-1}>
          <HoverRingButton>Hover Ring</HoverRingButton>
        </Link>
      </div>
    </div>
  );
}

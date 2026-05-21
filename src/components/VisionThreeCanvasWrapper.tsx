"use client";

import dynamic from "next/dynamic";

const VisionThreeCanvas = dynamic(
  () => import("./VisionThreeCanvas"),
  { ssr: false }
);

export default function VisionThreeCanvasWrapper() {
  return <VisionThreeCanvas />;
}

import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/avalaunch/avalaunch"),
  { ssr: false }
);

export default function Page() {
  return <DynamicComponentWithNoSSR />;
}

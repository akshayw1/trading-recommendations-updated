import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/sui/sui"),
  { ssr: false }
);

export default function Page() {
  return <DynamicComponentWithNoSSR />;
}

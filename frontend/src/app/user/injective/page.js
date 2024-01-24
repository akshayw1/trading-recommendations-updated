import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/injective/injective"),
  { ssr: false }
);

export default function Page() {
  return <DynamicComponentWithNoSSR />;
}

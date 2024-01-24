import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/solona/solona"),
  { ssr: false }
);

export default function Page() {
  return <DynamicComponentWithNoSSR />;
}

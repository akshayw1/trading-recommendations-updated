import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/cosmos/cosmos"),
  { ssr: false }
);

export default function Page() {
  return <DynamicComponentWithNoSSR />;
}

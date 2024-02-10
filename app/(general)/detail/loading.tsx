import dynamic from "next/dynamic";

// prevent a window undefined error since OverlayLoader relies on a browser API
// https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr
const OverlayLoader = dynamic(() => import("@/components/overlay-loader"), {
  ssr: false,
});

function Loading() {
  return <OverlayLoader loading={true} />;
}

export default Loading;

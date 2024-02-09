"use client";
import ReactDOM from "react-dom";

import Loader from "./loader";

type Props = {
  loading: boolean;
  children?: React.ReactNode;
};

const OverlayLoader = ({ loading, children = null }: Props) => {
  return loading && window ? (
    ReactDOM.createPortal(
      <div className="w-full h-full absolute z-[5000] left-0 top-0 bg-[rgba(0,0,0,0.5]">
        <Loader className="absolute h-screen" loading={true} />
      </div>,
      window.document.getElementById("overlay-root") ?? window.document.body
    )
  ) : (
    <>{children}</>
  );
};

export default OverlayLoader;

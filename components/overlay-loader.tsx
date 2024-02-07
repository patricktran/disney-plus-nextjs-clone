"use client";
import ReactDOM from "react-dom";

import Loader from "./loader";

type Props = {
  loading: boolean;
  children?: React.ReactNode;
};

const OverlayLoader = ({ loading, children = null }: Props) => {
  return loading ? (
    ReactDOM.createPortal(
      <div className="w-full h-full absolute z-[5000] left-0 top-0">
        <Loader
          className="absolute h-screen bg-[rgba(0,0,0,0.5]"
          loading={true}
        />
      </div>,
      window.document.getElementById("overlay-root") ?? window.document.body
    )
  ) : (
    <>{children}</>
  );
};

export default OverlayLoader;

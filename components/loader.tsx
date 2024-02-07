type Props = {
  className?: string;
  /* if true, loading animation will appear */
  loading: boolean;
};

function Loader({ className, loading = true }: Props) {
  return loading ? (
    <div
      className={`w-full h-full z-10 flex flex-col justify-center items-center ${className}`}
    >
      <div className="relative overflow-hidden min-h-[48px] min-w-[48px] before:absolute before:content-[''] before:bg-contain before:w-full before:h-full before:bg-no-repeat before:bg-[url('/circular-loader.png')] before:animate-spin"></div>
    </div>
  ) : null;
}

export default Loader;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">{children}</div>
    </div>
  );
}

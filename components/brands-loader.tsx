import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  skeletons: number;
};

export function BrandsLoader({ skeletons }: Props) {
  return (
    <div className="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-5 pt-16 pb-10 mx-10">
      {[...Array(skeletons)].map((_, i) => (
        <Skeleton key={i} className="video-card" />
      ))}
    </div>
  );
}

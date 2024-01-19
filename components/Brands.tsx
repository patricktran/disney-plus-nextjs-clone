import { Brand } from "@/lib/types";
import VideoCard from "./VideoCard";

async function Brands() {
  const brands: Brand[] = await fetch(`${process.env.HOST}/api/brands`).then(
    (res) => res.json()
  );

  return (
    <div className="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-5 pt-16 pb-10 mx-10">
      {brands.map((brand) => (
        <VideoCard
          key={brand.id}
          imagePath={brand.imagePath}
          videoPath={brand.videoPath}
        />
      ))}
    </div>
  );
}

export default Brands;

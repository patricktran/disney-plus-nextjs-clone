import Link from "next/link";

import { getSearchLink } from "@/lib/nav";
import { Brand } from "@/lib/types";

import VideoCard from "./video-card";

async function Brands() {
  const brands: Brand[] = await fetch(`${process.env.HOST}/api/brands`).then(
    (res) => res.json()
  );

  return (
    <div className="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-5 pt-16 pb-10 mx-10">
      {brands.map((brand) => (
        <Link key={brand.id} href={getSearchLink(encodeURIComponent(brand.id))}>
          <VideoCard imagePath={brand.imagePath} videoPath={brand.videoPath} />
        </Link>
      ))}
    </div>
  );
}

export default Brands;

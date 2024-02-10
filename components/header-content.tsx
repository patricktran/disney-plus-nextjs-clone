import Image from "next/image";
import Link from "next/link";

import GenreDropdown from "./genre-dropdown";
import SearchInput from "./search-input";

/**
 * This is a server component with other server components.
 */
function HeaderContent() {
  return (
    <>
      <Link href="/" className="mr-10">
        <Image
          src="/disney-logo.webp"
          alt="Disney Logo"
          width={120}
          height={51}
          className="cursor-pointer invert-0 dark:invert"
          priority
        />
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
      </div>
    </>
  );
}

export default HeaderContent;

import Link from "next/link";
import Image from "next/image";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

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

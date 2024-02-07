"use client";

import useScrollPosition from "@react-hook/window-scroll";

import { cn } from "@/lib/utils";

const threshold = 10;

/**
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#interleaving-server-and-client-components
 * Since Client Components are rendered after Server Components, you cannot import a Server Component into a Client Component module (since it would require a new request back to the server).
 * Instead, you can pass a Server Component as props to a Client Component.
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props
 */
function Header({ children }: { children: React.ReactNode }) {
  const scrollY = useScrollPosition();

  return (
    <header
      className={cn(
        "transition duration-300 ease-in-out fixed w-full z-50 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900",
        scrollY > threshold && "bg-dark-background/90 drop-shadow-lg"
      )}
    >
      {children}
    </header>
  );
}

export default Header;

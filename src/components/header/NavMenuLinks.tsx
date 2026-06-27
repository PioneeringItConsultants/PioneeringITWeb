"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Theme from "./theme/Theme";

const pages = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Products", link: "/products" },
  { name: "Mobile App", link: "/mobile-app" },
  { name: "About", link: "/about" },
];

const NavMenuLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex md:items-center gap-7 text-[15px] space-y-5 md:space-y-0">
      {pages.map((item) => {
        const active = pathname === item.link;
        return (
          <li key={item.name}>
            <Link
              href={item.link}
              className={`relative transition-colors hover:text-[var(--color-accent)] ${
                active
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-muted)]"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                  active ? "w-full" : "w-0"
                }`}
              />
            </Link>
          </li>
        );
      })}
      <li>
        <Link href="/contact" className="btn-primary !py-2 !px-5 text-sm">
          Hire Us
        </Link>
      </li>
      <li>
        <Theme />
      </li>
    </ul>
  );
};

export default NavMenuLinks;

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavMenuLinks from "./NavMenuLinks";
import Image from "next/image";
import logoImage from '../../../public/images/header/image.png'

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="glass border-b border-[var(--color-border)]">
        <div className="container flex justify-between items-center py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-9 h-9 rounded-xl text-white font-black text-lg shadow-lg ">
              <Image
                src={logoImage}
                alt="Logo"
                height={20}
                width={20}
                className="object-cover"
              />
            </span>
            <span className="text-lg font-bold tracking-tight">
              NexGen<span className="gradient-text"> Lab</span>
            </span>
          </Link>

          <div className="hidden md:block">
            <NavMenuLinks />
          </div>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;

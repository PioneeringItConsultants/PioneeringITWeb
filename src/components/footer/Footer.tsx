import Link from "next/link";
import { FaFacebook, FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";

const footerData = [
  {
    title: "Company",
    items: [
      { name: "About Us", link: "/about" },
      { name: "Services", link: "/services" },
      { name: "Products", link: "/products" },
      { name: "Mobile App", link: "/mobile-app" },
    ],
  },
  {
    title: "Products",
    items: [
      { name: "E-Commerce Kit", link: "/products" },
      { name: "SaaS Dashboard", link: "/products" },
      { name: "Portfolio Pro", link: "/products" },
      { name: "Booking System", link: "/products" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms & Conditions", link: "/termsAndConditions" },
      { name: "Privacy Policy", link: "/privacyPolicy" },
    ],
  },
];

const socials = [
  { icon: FaFacebook, link: "#" },
  { icon: FaXTwitter, link: "#" },
  { icon: FaLinkedin, link: "#" },
  { icon: FaYoutube, link: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border)] mt-10">
      <div className="glow w-[300px] h-[300px] bg-violet-700 -bottom-20 left-1/4 opacity-30" />
      <div className="container relative z-10 pt-16 pb-10">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand + newsletter */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-white font-black">
                N
              </span>
              <span className="text-lg font-bold">
                NexGen<span className="gradient-text"> Lab</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--color-muted)] max-w-xs">
              We build high-performance websites, web apps and ready-to-sell
              digital products that grow your business.
            </p>
            <form className="flex gap-2 max-w-xs pt-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-transparent border border-[var(--color-border)] rounded-full px-4 py-2 text-sm outline-none focus:border-[var(--color-brand)]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid place-items-center w-10 h-10 rounded-full bg-primary text-white shrink-0"
              >
                <HiArrowRight />
              </button>
            </form>
          </div>

          {/* Link columns */}
          {footerData.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-ink)] mb-4">
                {col.title}
              </h2>
              <ul className="space-y-3">
                {col.items.map((ele) => (
                  <li key={ele.name}>
                    <Link
                      href={ele.link}
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      {ele.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="md:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Get in touch
            </h2>
            <a
              href="mailto:nextsoftdev1@gmail.com"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] block"
            >
              nextsoftdev1@gmail.com
            </a>
            <p className="text-sm text-[var(--color-muted)] mt-2">
              Dhanmondi, Dhaka-1200, Bangladesh
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={i}
                    href={s.link}
                    className="grid place-items-center w-9 h-9 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} NexGen Lab. All rights reserved.</p>
          <p>
            Built with <span className="gradient-text">Next.js</span> by NexGen
            Lab
          </p>
        </div>
      </div>
    </footer>
  );
}

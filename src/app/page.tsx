import Link from "next/link";
import ProfileCard from "@/components/main/ProfileCard";
import ServicesCard from "@/components/main/ServicesCard";
import ProductCard from "@/components/main/ProductCard";
import SectionTitle from "@/components/main/SectionTitle";
import { products } from "@/data/products";
import Saddam from "../../public/images/home/saddam.jpg";
import { HiArrowRight } from "react-icons/hi";
import { FiStar } from "react-icons/fi";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "6+", label: "Products Sold" },
  { value: "99%", label: "Satisfaction" },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Redux",
  "Figma",
  "AWS",
];

const profileData = [
  {
    name: "Md. Saddam Hossain Saykat",
    title: "Founder & CEO",
    organization: "NexGen Lab",
    links: { linkedin: "#", github: "#", email: "#" },
    image: Saddam,
  },
  {
    name: "Md. Saddam Hossain Saykat",
    title: "Lead Engineer",
    organization: "NexGen Lab",
    links: { linkedin: "#", github: "#", email: "#" },
    image: Saddam,
  },
  {
    name: "Md. Saddam Hossain Saykat",
    title: "Product Designer",
    organization: "NexGen Lab",
    links: { linkedin: "#", github: "#", email: "#" },
    image: Saddam,
  },
];

const Home = () => {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden grid-bg">
        <div className="glow w-[420px] h-[420px] bg-violet-600 -top-20 -left-10" />
        <div className="glow w-[380px] h-[380px] bg-fuchsia-600 top-10 right-0" />
        <div className="glow w-[300px] h-[300px] bg-cyan-500 bottom-0 left-1/3" />

        <div className="container relative z-10 py-24 md:py-32 text-center fade-up">
          <span className="eyebrow justify-center mb-6">
            <FiStar /> Web Development &amp; Digital Products
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            We build the web,
            <br />
            <span className="gradient-text">you grow your business.</span>
          </h1>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto mt-6">
            NexGen Lab designs and develops high-performance websites, web apps
            and ready-to-launch digital products. Hire us for custom work — or
            buy a product off the shelf today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link href="/products" className="btn-primary">
              Browse Products <HiArrowRight />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Hire Our Team
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl py-6 px-4">
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech marquee */}
        <div className="relative z-10 border-y border-[var(--color-border)] py-5 overflow-hidden">
          <div className="marquee-track gap-12">
            {[...techStack, ...techStack].map((t, i) => (
              <span
                key={i}
                className="text-lg font-semibold text-[var(--color-muted)] whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="py-24">
        <div className="container">
          <SectionTitle
            eyebrow="What We Do"
            text="Services built to scale"
            subtitle="From a single landing page to a full SaaS platform — we cover the whole journey."
          />
          <ServicesCard />
        </div>
      </section>

      {/* ===================== PRODUCTS ===================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="glow w-[360px] h-[360px] bg-violet-700 top-20 right-0" />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionTitle
              align="left"
              eyebrow="Shop"
              text="Ready-to-launch products"
              subtitle="Production-ready code & templates you can buy and deploy today."
            />
            <Link
              href="/products"
              className="btn-ghost shrink-0 self-start md:self-auto"
            >
              View all <HiArrowRight />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="py-12">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 md:py-20 text-center text-white">
            <div className="absolute inset-0 opacity-20 grid-bg" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold">
                Have a project in mind?
              </h2>
              <p className="mt-4 text-white/90 text-lg">
                Share your idea and get the best solution for your business —
                fast, modern and built to last.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-white text-[#14141f] font-semibold py-3 px-7 rounded-full hover:scale-105 transition-transform"
              >
                Talk To Us <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TEAM ===================== */}
      <section className="py-24">
        <div className="container">
          <SectionTitle
            eyebrow="The People"
            text="Grow your business with us"
            subtitle="A small, senior team obsessed with quality and your results."
          />
          <div className="grid md:grid-cols-3 gap-10 md:gap-6">
            {profileData.map((ele, i) => (
              <ProfileCard key={i} ele={ele} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

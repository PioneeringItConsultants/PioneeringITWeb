import Link from "next/link";
import ProfileCard from "@/components/main/ProfileCard";
import ServicesCard from "@/components/main/ServicesCard";
import ProductCard from "@/components/main/ProductCard";
import SectionTitle from "@/components/main/SectionTitle";
import { products } from "@/data/products";
import Saddam from "../../public/images/home/saddam.jpg";
import { HiArrowRight } from "react-icons/hi";
import {
  FiStar,
  FiBox,
  FiLayers,
  FiServer,
  FiHardDrive,
  FiTrendingUp,
  FiCreditCard,
} from "react-icons/fi";
import { FaAws } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiLaravel,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGo,
  SiWordpress,
  SiRedux,
  SiFramer,
  SiFigma,
  SiFlutter,
  SiNestjs,
  SiExpress,
  SiFastify,
  SiGraphql,
} from "react-icons/si";

const stats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "11+", label: "Happy Clients" },
  { value: "20+", label: "Products Sold" },
  { value: "99%", label: "Satisfaction" },
];

const ACCENT = "var(--color-accent)";

const techStack = [
  { name: "Next.js", Icon: SiNextdotjs, color: "var(--color-ink)" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "GoLang", Icon: SiGo, color: "#00ADD8" },
  { name: "Wordpress", Icon: SiWordpress, color: "#21759B" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Zustand", Icon: FiBox, color: ACCENT },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "Nest.js", Icon: SiNestjs, color: "#E0234E" },
  { name: "Express", Icon: SiExpress, color: "var(--color-ink)" },
  { name: "CMS", Icon: FiLayers, color: ACCENT },
  { name: "Virtual Private Server", Icon: FiServer, color: ACCENT },
  { name: "Bucket Manage", Icon: FiHardDrive, color: ACCENT },
  { name: "SEO", Icon: FiTrendingUp, color: ACCENT },
  { name: "Payment Method", Icon: FiCreditCard, color: ACCENT },
  { name: "Fastify", Icon: SiFastify, color: "var(--color-ink)" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
];

const profileData = [
  {
    name: "Md. Saddam Hossain Saykat",
    title: "Founder & CEO",
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
            <FiStar /> Software Development &amp; Digital Products
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            We build the AI Powered web and app
            <br />
            <span className="gradient-text">to grow your business.</span>
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

        {/* <Icon className="text-[var(--color-accent)] text-lg" /> */}
        {/* Tech marquee */}
        <div className="relative z-10 border-y border-[var(--color-border)] py-5 overflow-hidden">
          <div className="marquee-track gap-12">
            {[...techStack, ...techStack].map((t, i) => {
              const Icon = t.Icon;
              return (
                <span
                  key={i}
                  className="flex items-center gap-2 text-base font-semibold text-[var(--color-ink)] glass px-5 py-2 rounded-full whitespace-nowrap"
                >
                  <Icon className="text-lg" style={{ color: t.color }} />
                  {t.name}
                </span>
              );
            })}
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
          {/* <div className="grid md:grid-cols-3 gap-10 md:gap-6">
            {profileData.map((ele, i) => (
              <ProfileCard key={i} ele={ele} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;

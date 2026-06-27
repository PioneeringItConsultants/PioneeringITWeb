import ServicesCard from "@/components/main/ServicesCard";
import SectionTitle from "@/components/main/SectionTitle";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export const metadata = {
  title: "NexGen Lab | Services",
  description:
    "Custom web, app and software development services built with Next.js, React and TypeScript — high-performance, SEO-optimized and scalable.",
};

const projectIdeas = [
  "Hotel & Restaurant Management",
  "Hospital Management System",
  "Inventory Management",
  "School Management",
  "E-commerce Platform",
  "Library Management",
];

const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="glow w-[400px] h-[400px] bg-violet-600 -top-20 left-0" />
        <div className="glow w-[320px] h-[320px] bg-cyan-500 top-10 right-10" />
        <div className="container relative z-10 py-20 md:py-28 text-center fade-up">
          <span className="eyebrow justify-center mb-5">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">ship & scale</span>
          </h1>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto mt-5">
            One team, end-to-end — design, development, deployment and support.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16">
        <div className="container">
          <ServicesCard />
        </div>
      </section>

      {/* Project ideas */}
      <section className="py-16">
        <div className="container">
          <SectionTitle
            eyebrow="Use Cases"
            text="Your ideas, transformed into technology"
            subtitle="Some of the products we love to build. Don't see yours? We build that too."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {projectIdeas.map((idea, idx) => (
              <div
                key={idx}
                className="glass card-lift rounded-full px-6 py-3 text-sm font-medium"
              >
                {idea}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-primary rounded-3xl px-8 py-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 grid-bg" />
            <h2 className="relative z-10 text-2xl md:text-4xl font-bold">
              Let us help you with your project
            </h2>
            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-2 mt-8 bg-white text-[#14141f] font-semibold py-3 px-7 rounded-full hover:scale-105 transition-transform"
            >
              Start a Project <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

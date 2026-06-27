import SectionTitle from "@/components/main/SectionTitle";
import ProductCard from "@/components/main/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexGen Lab | Products",
  description:
    "Buy ready-to-launch web apps, templates and digital products built with Next.js, React and TypeScript. Production-ready code you can deploy today.",
};

const Products = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="glow w-[400px] h-[400px] bg-violet-600 -top-20 left-0" />
        <div className="glow w-[340px] h-[340px] bg-fuchsia-600 top-0 right-10" />
        <div className="container relative z-10 py-20 md:py-28 text-center fade-up">
          <span className="eyebrow justify-center mb-5">Digital Store</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Products you can <span className="gradient-text">launch today</span>
          </h1>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto mt-5">
            Hand-crafted, production-ready code. Buy once, customize freely and
            ship your business in record time.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="pb-24">
        <div className="container">
          <div className="glass rounded-3xl px-8 py-14 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Need something <span className="gradient-text">custom</span>?
            </h2>
            <p className="text-[var(--color-muted)] mt-3 max-w-xl mx-auto">
              We also build bespoke products tailored exactly to your business.
              Tell us what you need.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Request Custom Build <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

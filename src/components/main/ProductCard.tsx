import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="glass card-lift rounded-2xl overflow-hidden flex flex-col">
      {/* Cover */}
      <div
        className="relative h-40 flex items-end p-5"
        style={{ background: product.gradient }}
      >
        <div className="absolute inset-0 opacity-30 grid-bg" />
        {product.badge && (
          <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-black/30 backdrop-blur text-white">
            {product.badge}
          </span>
        )}
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
            {product.category}
          </span>
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-[var(--color-muted)] mb-4">
          {product.tagline}
        </p>
        <ul className="space-y-2 mb-6">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm">
              <FiCheck className="text-[var(--color-accent)] shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-[var(--color-muted)] line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>
          <Link
            href={`/contact?product=${product.slug}`}
            className="btn-primary !py-2 !px-4 text-sm"
          >
            Buy <HiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

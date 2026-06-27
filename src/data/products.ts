export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  features: string[];
  gradient: string;
};

export const products: Product[] = [
  {
    slug: "ecommerce-starter",
    name: "E-Commerce Starter Kit",
    tagline: "Launch a modern online store in days, not months.",
    category: "Web App",
    price: 149,
    oldPrice: 249,
    badge: "Best Seller",
    features: [
      "Next.js 16 + TypeScript",
      "Cart, checkout & Stripe ready",
      "Admin dashboard",
      "SEO optimized",
    ],
    gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
  },
  {
    slug: "saas-dashboard",
    name: "SaaS Admin Dashboard",
    tagline: "A polished analytics dashboard with auth baked in.",
    category: "Template",
    price: 99,
    oldPrice: 159,
    features: [
      "Charts & analytics",
      "Role-based auth",
      "Dark / light mode",
      "Responsive layout",
    ],
    gradient: "linear-gradient(135deg,#22d3ee,#8b5cf6)",
  },
  {
    slug: "portfolio-pro",
    name: "Portfolio Pro",
    tagline: "Stand out with a premium developer portfolio.",
    category: "Template",
    price: 49,
    badge: "New",
    features: [
      "Animated sections",
      "Blog ready",
      "Contact form",
      "1-click deploy",
    ],
    gradient: "linear-gradient(135deg,#f59e0b,#ec4899)",
  },
  {
    slug: "restaurant-app",
    name: "Restaurant Ordering App",
    tagline: "Menu, ordering & reservations out of the box.",
    category: "Mobile + Web",
    price: 199,
    oldPrice: 299,
    features: [
      "QR menu & ordering",
      "Table reservation",
      "Kitchen panel",
      "Payment integration",
    ],
    gradient: "linear-gradient(135deg,#10b981,#22d3ee)",
  },
  {
    slug: "lms-platform",
    name: "LMS Learning Platform",
    tagline: "Sell courses with a complete learning system.",
    category: "Web App",
    price: 179,
    features: [
      "Course builder",
      "Video lessons",
      "Quizzes & progress",
      "Student dashboard",
    ],
    gradient: "linear-gradient(135deg,#6366f1,#a855f7)",
  },
  {
    slug: "booking-system",
    name: "Booking & Appointment",
    tagline: "Let customers book your services 24/7.",
    category: "Web App",
    price: 129,
    badge: "Popular",
    features: [
      "Calendar booking",
      "Email reminders",
      "Staff management",
      "Online payments",
    ],
    gradient: "linear-gradient(135deg,#ec4899,#f43f5e)",
  },
];

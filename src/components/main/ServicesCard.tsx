import {
  FiGitBranch,
  FiGlobe,
  FiSmartphone,
  FiShield,
  FiHeadphones,
  FiBookOpen,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type Service = {
  title: string;
  description: string;
  items: string[];
  icon: IconType;
};

const servicesData: Service[] = [
  {
    title: "DevOps & Git",
    icon: FiGitBranch,
    description:
      "We unify development and operations, automate pipelines and ship software faster and more reliably to meet your business goals.",
    items: [],
  },
  {
    title: "Website Development",
    icon: FiGlobe,
    description: "End-to-end web solutions built for speed, SEO and scale.",
    items: [
      "Web Design",
      "Frontend Development",
      "Backend Development",
      "CMS & Web Hosting",
      "Responsive Design",
    ],
  },
  {
    title: "App Development",
    icon: FiSmartphone,
    description: "Native-quality mobile experiences for iOS and Android.",
    items: ["UI/UX Design", "iOS", "Android", "Backend Services", "Maintenance"],
  },
  {
    title: "SSL & Commerce",
    icon: FiShield,
    description:
      "Secure, trustworthy online transactions with end-to-end encryption and payment integration.",
    items: [],
  },
  {
    title: "Customer Service",
    icon: FiHeadphones,
    description:
      "Dedicated support before, during and after launch — a crucial part of the overall product experience.",
    items: [],
  },
  {
    title: "Learning Platform",
    icon: FiBookOpen,
    description: "Complete LMS builds from design to content delivery.",
    items: ["Designing", "Development", "SEO", "Content Delivery", "Support"],
  },
];

const ServicesCard = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.map((service, idx) => {
        const Icon = service.icon;
        return (
          <div
            key={idx}
            className="glass card-lift rounded-2xl p-6 flex flex-col"
            data-aos="fade-up"
          >
            <div className="w-12 h-12 rounded-xl bg-primary grid place-items-center text-white text-xl mb-5 shadow-lg shadow-violet-500/30">
              <Icon />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-[var(--color-muted)] mb-4 leading-relaxed">
              {service.description}
            </p>
            {service.items.length > 0 && (
              <ul className="text-sm space-y-2 mt-auto">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ServicesCard;

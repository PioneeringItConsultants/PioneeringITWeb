import Image from "next/image";
import Link from "next/link";
import app_banner from "../../../public/images/mobileapp/image.png";
import ideation from "../../../public/images/mobileapp/ideation.png";
import Wireframe from "../../../public/images/mobileapp/wirefearm.png";
import Prototype from "../../../public/images/mobileapp/prototype.png";
import Development from "../../../public/images/mobileapp/devlopment.png";
import Data from "../../../public/images/mobileapp/data.png";
import Content from "../../../public/images/mobileapp/content.png";
import Quality_Assurance from "../../../public/images/mobileapp/quality assurence.jpg";
import Delivery from "../../../public/images/mobileapp/delevery.png";
import SectionTitle from "@/components/main/SectionTitle";
import { HiArrowRight } from "react-icons/hi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexGen Lab | Mobile App Development",
  description:
    "Native-quality iOS and Android apps — from ideation to delivery. We design, build and ship mobile experiences your users will love.",
};

const steps = [
  { title: "Ideation", description: "Gather technical and business requirements, define the audience and set project goals.", icon: ideation },
  { title: "Wireframe", description: "Structure the app layout and define how users interact with each screen.", icon: Wireframe },
  { title: "Prototype", description: "Interactive mockups to visualize functionality and gather early feedback.", icon: Prototype },
  { title: "Development", description: "Build the app with platform-specific tools, implementing backend and frontend.", icon: Development },
  { title: "Data", description: "Handle storage, APIs and backend infrastructure to power app features.", icon: Data },
  { title: "Content", description: "Engaging content and visuals for an intuitive, on-brand experience.", icon: Content },
  { title: "Quality Assurance", description: "Rigorous testing to fix bugs and verify smooth operation across devices.", icon: Quality_Assurance },
  { title: "Delivery", description: "Deploy to app stores, set up updates and provide post-launch support.", icon: Delivery },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="glow w-[400px] h-[400px] bg-violet-600 -top-20 left-0" />
        <div className="glow w-[320px] h-[320px] bg-cyan-500 top-10 right-0" />
        <div className="container relative z-10 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center fade-up">
          <div>
            <span className="eyebrow mb-5">Mobile App Development</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Native-quality apps for{" "}
              <span className="gradient-text">iOS & Android</span>
            </h1>
            <p className="text-[var(--color-muted)] text-lg mt-5 leading-relaxed">
              We craft mobile apps tailored to each platform — defining
              objectives, designing intuitive interfaces and coding with
              platform-specific technologies like Swift and Kotlin. Rigorous
              testing ensures reliability across every device.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Build Your App <HiArrowRight />
            </Link>
          </div>
          <div className="relative">
            <Image
              src={app_banner}
              alt="Mobile App Development"
              className="w-full rounded-3xl object-cover float"
              priority
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Our Process"
            text="App development life cycle"
            subtitle="A proven, transparent process from first idea to final delivery."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="glass card-lift rounded-2xl p-6 text-center"
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <span className="absolute -top-2 -right-1 text-xs font-bold w-6 h-6 grid place-items-center rounded-full bg-primary text-white">
                    {index + 1}
                  </span>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

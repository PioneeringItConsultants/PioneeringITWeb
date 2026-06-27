import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import Saddam from "../../../public/images/home/saddam.jpg";
import mehedi from "../../../public/images/about/mehedi.jpeg";
import Yeasir from "../../../public/images/about/yeasir.png";
import Muntasir from "../../../public/images/about/muntasir.jpg";
import Rahat from "../../../public/images/about/rahat.jpg";
import SectionTitle from "@/components/main/SectionTitle";
import TeamGrid, { TeamMember } from "@/components/main/TeamGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexGen Lab | About Us",
  description:
    "NexGen Lab is a software studio crafting high-performance web, desktop and mobile applications with a relentless focus on quality.",
};

const DEGREE = "BSc in Computer Science & Engineering (CSE)";

const teamMembers: TeamMember[] = [
  {
    name: "Md. Saddam Hossain Saykat",
    position: "Founder & CEO",
    image: Saddam,
    degree: DEGREE,
    summary:
      "Founder of NexGen Lab, specializing in Node.js backend architecture and DevOps. Designs scalable systems and owns the deployment, CI/CD and cloud infrastructure that keep our products fast and reliable.",
    expertise: [
      "Node.js Backend Architecture",
      "DevOps, CI/CD & Cloud Infrastructure",
      "Microservices & API Design",
      "System Scalability & Performance",
    ],
    linkedin: "#",
    facebook: "#",
    email: "#",
  },
  {
    name: "Md. Mehedi Hasan",
    position: "Mobile App Developer",
    image: mehedi,
    degree: DEGREE,
    summary:
      "Mobile application developer building smooth, native-quality apps for Android and iOS. Turns product ideas into polished, performant mobile experiences.",
    expertise: [
      "Cross-platform App Development",
      "Android & iOS",
      "Flutter & Dart",
      "App Store Deployment",
    ],
    linkedin: "#",
    facebook: "#",
    email: "#",
  },
  {
    name: "Muntasir Ahmed",
    position: "Full Stack Developer",
    image: Muntasir,
    degree: DEGREE,
    summary:
      "Full stack developer comfortable across the entire stack — building both pixel-perfect frontends and robust backends, and connecting them into complete products.",
    expertise: [
      "Frontend Development (React / Next.js)",
      "Backend Development & APIs",
      "Database Design",
      "End-to-end Feature Delivery",
    ],
    linkedin: "https://www.linkedin.com/in/muntasir-ahmed-fahim",
    facebook: "https://www.facebook.com/muntasir.ahmed.341792",
    email: "maf107714@gmail.com",
  },
  {
    name: "Md Yeasir Arafat",
    position: "Laravel Developer",
    image: Yeasir,
    degree: DEGREE,
    summary:
      "Backend developer specializing in the Laravel ecosystem — building secure, maintainable web applications, REST APIs and admin systems with PHP.",
    expertise: [
      "Laravel & PHP",
      "REST API Development",
      "Authentication & Security",
      "MySQL / Database Management",
    ],
    linkedin: "https://www.linkedin.com/in/md-yeasir-arafat-598b84238/",
    facebook: "https://www.facebook.com/mdyeasir.ararat",
    email: "#",
  },
  {
    name: "Rahat Ahmed",
    position: "UI & UX Designer",
    image: Rahat,
    degree: DEGREE,
    summary:
      "UI/UX designer crafting clean, intuitive and beautiful interfaces. Focuses on user research, wireframing and design systems that make products a joy to use.",
    expertise: [
      "UI Design & Visual Systems",
      "UX Research & Wireframing",
      "Prototyping (Figma)",
      "Design Systems",
    ],
    linkedin: "#",
    facebook: "https://www.facebook.com/khrrahatkhondokar",
    email: "#",
  },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="glow w-[400px] h-[400px] bg-fuchsia-600 -top-20 right-0" />
        <div className="glow w-[320px] h-[320px] bg-violet-600 top-10 left-0" />
        <div className="container relative z-10 py-20 md:py-28 fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow justify-center mb-5">About NexGen Lab</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              At the forefront of{" "}
              <span className="gradient-text">technological innovation</span>
            </h1>
            <p className="text-[var(--color-muted)] text-lg mt-6 leading-relaxed">
              NexGen Lab specializes in cutting-edge software development. Our
              engineers design sophisticated web, desktop and mobile
              applications that meet the highest standards of quality and
              performance — partnering with everyone from emerging startups to
              established industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              To deliver comprehensive digital solutions for every enterprise,
              dispelling the misconceptions around digital systems by leveraging
              cutting-edge technology and automation that accelerates business
              growth. We craft both custom and off-the-shelf software, mobile
              apps and beautiful web experiences.
            </p>
          </div>
          <div className="glass rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4">
              Our <span className="gradient-text">Vision</span>
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              To be a global leader in software development, renowned for
              excellence in both custom and ready-made solutions. Founded on a
              commitment to perfection and uncompromising quality, we deliver
              exceptional digital products that drive real success for our
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container">
          <SectionTitle
            eyebrow="The Team"
            text="Talented people turning ideas into reality"
            subtitle="A dedicated team that collaborates with enthusiasm on every project."
          />
          <TeamGrid members={teamMembers} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-primary rounded-3xl px-8 py-14 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 grid-bg" />
            <h2 className="relative z-10 text-2xl md:text-4xl font-bold">
              Ready to build something great together?
            </h2>
            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-2 mt-8 bg-white text-[#14141f] font-semibold py-3 px-7 rounded-full hover:scale-105 transition-transform"
            >
              Get in Touch <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import Saddam from "../../../public/images/home/saddam.jpg";
import Yeasir from "../../../public/images/about/yeasir.png";
import Muntasir from "../../../public/images/about/muntasir.jpg";
import Rahat from "../../../public/images/about/rahat.jpg";
import SectionTitle from "@/components/main/SectionTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexGen Lab | About Us",
  description:
    "NexGen Lab is a software studio crafting high-performance web, desktop and mobile applications with a relentless focus on quality.",
};

const teamMembers = [
  {
    name: "Md. Saddam Hossain Saykat",
    position: "Founder & CEO",
    image: Saddam,
    linkedin: "#",
    facebook: "#",
    email: "#",
  },
  {
    name: "Md Yeasir Arafat",
    position: "Frontend Developer (Intern)",
    image: Yeasir,
    linkedin: "https://www.linkedin.com/in/md-yeasir-arafat-598b84238/",
    facebook: "https://www.facebook.com/mdyeasir.ararat",
    email: "#",
  },
  {
    name: "Muntasir Ahmed",
    position: "Full Stack Developer (Intern)",
    image: Muntasir,
    linkedin: "https://www.linkedin.com/in/muntasir-ahmed-fahim",
    facebook: "https://www.facebook.com/muntasir.ahmed.341792",
    email: "maf107714@gmail.com",
  },
  {
    name: "Rahat Ahmed",
    position: "UI & UX Designer (Intern)",
    image: Rahat,
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((person, i) => (
              <div key={i} className="glass card-lift rounded-2xl py-8 px-4 text-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={112}
                  height={112}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-4 p-[3px] bg-primary"
                />
                <h2 className="font-semibold">{person.name}</h2>
                <p className="text-sm text-[var(--color-muted)] mt-1">
                  {person.position}
                </p>
                <div className="flex justify-center gap-3 mt-5">
                  <a
                    target="_blank"
                    href={person.linkedin}
                    className="grid place-items-center w-9 h-9 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    target="_blank"
                    href={person.facebook}
                    className="grid place-items-center w-9 h-9 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={person.email}
                    className="grid place-items-center w-9 h-9 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
                  >
                    <HiOutlineMail />
                  </a>
                </div>
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

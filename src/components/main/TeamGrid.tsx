"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiAward, FiCheck } from "react-icons/fi";

export type TeamMember = {
  name: string;
  position: string;
  image: string | StaticImageData;
  degree: string;
  expertise: string[];
  summary: string;
  linkedin: string;
  facebook: string;
  email: string;
};

const TeamGrid = ({ members }: { members: TeamMember[] }) => {
  const [active, setActive] = useState<TeamMember | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {members.map((person, i) => (
          <button
            key={i}
            onClick={() => setActive(person)}
            className="glass card-lift rounded-2xl py-8 px-4 text-center group"
          >
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
            <span className="inline-block mt-4 text-xs font-semibold text-[var(--color-accent)] opacity-80 group-hover:opacity-100 transition">
              View Profile →
            </span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative z-10 glass rounded-3xl w-full max-w-lg p-8 fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] transition"
            >
              <IoMdClose />
            </button>

            <div className="flex items-center gap-5">
              <Image
                src={active.image}
                alt={active.name}
                width={88}
                height={88}
                className="w-22 h-22 rounded-2xl object-cover p-[3px] bg-primary shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold">{active.name}</h3>
                <p className="gradient-text font-semibold">{active.position}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 text-sm text-[var(--color-muted)]">
              <FiAward className="text-[var(--color-accent)]" />
              {active.degree}
            </div>

            <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-4">
              {active.summary}
            </p>

            <h4 className="text-sm font-semibold mt-6 mb-3 uppercase tracking-wider">
              Core Expertise
            </h4>
            <ul className="space-y-2">
              {active.expertise.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <FiCheck className="text-[var(--color-accent)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-3 mt-7">
              <a
                target="_blank"
                href={active.linkedin}
                className="grid place-items-center w-10 h-10 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                target="_blank"
                href={active.facebook}
                className="grid place-items-center w-10 h-10 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href={`mailto:${active.email}`}
                className="grid place-items-center w-10 h-10 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
              >
                <HiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamGrid;

import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type ProfileData = {
  name: string;
  title: string;
  organization: string;
  links: {
    linkedin: string;
    github: string;
    email: string;
  };
  image: string | StaticImageData;
};

type ProfileCardProps = {
  ele: ProfileData;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ ele }) => {
  return (
    <div className="glass card-lift rounded-2xl p-6 pt-14 w-full max-w-xs mx-auto text-center relative mt-10">
      {/* Profile Image */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <div className="w-24 h-24 rounded-full overflow-hidden p-[3px] bg-primary shadow-xl shadow-violet-500/30">
          <Image
            src={ele.image}
            alt={ele.name}
            width={96}
            height={96}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>

      <h2 className="text-lg font-semibold">{ele.name}</h2>
      <p className="gradient-text font-semibold mt-1">{ele.title}</p>
      <p className="text-sm text-[var(--color-muted)] mb-5">
        {ele.organization}
      </p>

      <div className="flex justify-center gap-3">
        <a
          href={ele.links.linkedin}
          className="grid place-items-center w-10 h-10 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
        >
          <FaLinkedin />
        </a>
        <a
          href={`mailto:${ele.links.email}`}
          className="grid place-items-center w-10 h-10 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
        >
          <MdEmail />
        </a>
        <a
          href={ele.links.github}
          className="grid place-items-center w-10 h-10 rounded-full border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;

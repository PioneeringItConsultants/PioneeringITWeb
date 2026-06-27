"use client";

import { useEffect, useState } from "react";
import NavMenuLinks from "./NavMenuLinks";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-3xl text-[var(--color-ink)]"
        aria-label="Open menu"
      >
        <IoMenuSharp />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Side Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-[82vw] max-w-xs glass z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-white font-black">
              N
            </span>
            <span className="font-bold">
              NexGen<span className="gradient-text"> Lab</span>
            </span>
          </Link>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <IoMdClose className="text-3xl" />
          </button>
        </div>

        <div className="p-8" onClick={() => setOpen(false)}>
          <NavMenuLinks />
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;

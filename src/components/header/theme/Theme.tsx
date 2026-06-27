"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiMoon, FiSun } from "react-icons/fi";
import { setTheme } from "@/redux/slice/themeSlice/themeSlice";

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.theme);
  const isLight = theme === "light";

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(isLight ? "light" : "dark");
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, isLight]);

  return (
    <button
      onClick={() => dispatch(setTheme(isLight ? "dark" : "light"))}
      aria-label="Toggle theme"
      className="grid place-items-center w-9 h-9 rounded-full border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:text-[var(--color-accent)] transition-colors"
    >
      {isLight ? <FiMoon className="text-black hover:text-[var(--color-accent)]" size={18} /> : <FiSun size={18} />}
    </button>
  );
};

export default Theme;

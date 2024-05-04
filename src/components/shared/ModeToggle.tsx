import { clsx } from "clsx";
//Iconos
import { CogIcon } from "@/icons/cog";
import { MoonIcon } from "@/icons/moon";
import { SunIcon } from "@/icons/sun";
import { useEffect, useState } from "react";

export const ModeToggle = () => {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light",
  );

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <div
      className={clsx(
        "fixed right-0 top-1/2 z-[9999] w-[15rem] -translate-y-1/2 transition xl:top-[6.5%] xl:translate-y-[-6.5%] 2xl:top-1/2 2xl:-translate-y-1/2",
        {
          "translate-x-[15rem]": !isActive,
          "translate-x-0": isActive,
        },
      )}
    >
      <div
        className="absolute left-[-3.75rem] grid h-[3.75rem] w-[3.75rem] cursor-pointer select-none place-content-center rounded-[.5rem_0_0_.5rem] bg-white text-black shadow-sm shadow-slate-400 dark:bg-night-black dark:text-white"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <CogIcon className="animate-spin text-[18px] [animation-duration:2000ms]" />
      </div>
      <div className="theme-select rounded-[0_0_0_.5rem] bg-white px-6 py-4 shadow-sm shadow-slate-400 dark:bg-night-black">
        <h5 className="mb-2 text-lg font-medium text-black dark:text-white">
          Theme Mode
        </h5>
        <div className="flex items-center justify-between gap-4">
          <div
            className="flex-[1] cursor-pointer rounded-lg text-center text-xl transition"
            onClick={() => setThemeState("dark")}
          >
            <button
              className="flex w-full flex-col items-center justify-center gap-1 rounded-md border px-4 py-4 dark:bg-flash-white dark:text-black"
              title="Active Dark Theme"
            >
              <MoonIcon />
            </button>
          </div>
          <div
            className="flex-[1] cursor-pointer rounded-lg text-center text-lg transition"
            onClick={() => setThemeState("theme-light")}
          >
            <button
              className="flex w-full flex-col items-center justify-center gap-1 rounded-md border bg-flash-white px-4 py-4 dark:border-flash-white dark:bg-transparent dark:text-white"
              title="Active Light Theme"
            >
              <SunIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

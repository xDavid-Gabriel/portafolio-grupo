import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent, j as renderSlot, k as renderHead } from '../astro_CaB0z2uk.mjs';
import 'kleur/colors';
import { T as TaskIcon, p as proyectos, $ as $$Portafolio } from './Portafolio_oLo8mv7V.mjs';
/* empty css                          */
import { clsx } from 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { H as HomeIcon, $ as $$Hero } from './Hero_DUzAWK3c.mjs';
import { A as AcercaDeIcon, $ as $$AcercaDe } from './AcercaDe_BwqE4sFI.mjs';
import { B as BriefCaseIcon, $ as $$Servicios } from './Servicios_X9_0_but.mjs';
import { G as GraduationsIcon, A as AnimatedProgressbar, $ as $$Habilidades } from './Habilidades_rluBV5XB.mjs';
import { R as ResumenIcon, $ as $$Curriculum } from './Curriculum_B8jN7OwG.mjs';
import { E as EnvelopeIcon, $ as $$Contacto } from './Contacto_DDMcpfNd.mjs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const $$Astro$4 = createAstro();
const $$BackgroundAnimation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BackgroundAnimation;
  return renderTemplate`<!-- Background Line and Animation -->${maybeRenderHead()}<div class="bg-lines fixed inset-0 z-[-1] md:max-xl:max-w-[45rem] xl:max-w-[60rem] 2xl:max-[76.25rem] mx-auto max-sm:px-8 sm:max-xl:px-12"> <div class="line-wrapper max-w-[1130px] w-full h-full ml-auto 2xl:-mr-24 relative flex justify-between"> <div class="relative w-px h-full border-r border-dashed line line1 border-slate-300 dark:border-metal-black before:absolute before:w-2 before:h-2 before:bg-theme-color before:rotate-45 before:-left-1 before:animate-top_bottom"></div> <div class="relative w-px h-full border-r border-dashed line line2 border-slate-300 dark:border-metal-black before:absolute before:bottom-0 before:w-2 before:h-2 before:bg-theme-color before:rotate-45 before:-left-1 before:animate-bottom_top before:[transition-delay:3s] before:[animation-delay:3s]"></div> <div class="relative w-px h-full border-r border-dashed line line3 border-slate-300 dark:border-metal-black before:absolute before:w-2 before:h-2 before:bg-theme-color before:rotate-45 before:-left-1 before:animate-top_bottom before:[transition-delay:3s] before:[animation-delay:3s]"></div> <div class="relative w-px h-full border-r border-dashed line line4 border-slate-300 dark:border-metal-black before:absolute before:bottom-0 before:w-2 before:h-2 before:bg-theme-color before:rotate-45 before:-left-1 before:animate-bottom_top before:[transition-delay:2s] before:[animation-delay:2s]"></div> </div> </div> <!-- Ends Here -->`;
}, "D:/documentos/GitHub/portafolio-grupo/src/components/shared/BackgroundAnimation.astro", void 0);

const CloseIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 512 512",
      width: size,
      height: size,
      fill,
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M368 368 144 144m224 0L144 368"
        }
      )
    }
  );
};

const navegaciones = [
  {
    id: 1,
    link: "inicio",
    nombre: "Inicio",
    icon: /* @__PURE__ */ jsx(HomeIcon, {})
  },
  {
    id: 2,
    link: "acerca-de",
    nombre: "Acerca de",
    icon: /* @__PURE__ */ jsx(AcercaDeIcon, {})
  },
  {
    id: 3,
    link: "servicios",
    nombre: "Servicios",
    icon: /* @__PURE__ */ jsx(BriefCaseIcon, {})
  },
  {
    id: 4,
    link: "habilidades",
    nombre: "Habilidades",
    icon: /* @__PURE__ */ jsx(GraduationsIcon, {})
  },
  {
    id: 5,
    link: "curriculum",
    nombre: "Currículum",
    icon: /* @__PURE__ */ jsx(ResumenIcon, {})
  },
  {
    id: 6,
    link: "portafolio",
    nombre: "Portafolio",
    icon: /* @__PURE__ */ jsx(TaskIcon, {})
  },
  {
    id: 7,
    link: "contacto",
    nombre: "Contacto",
    icon: /* @__PURE__ */ jsx(EnvelopeIcon, {})
  }
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("inicio");
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "acerca-de",
        "servicios",
        "habilidades",
        "curriculum",
        "portafolio",
        "contacto"
      ];
      const scrollY = window.scrollY;
      const selectedSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const height = element.offsetHeight;
          return scrollY >= top && scrollY <= top + height;
        }
        return false;
      });
      if (selectedSection) {
        setActiveNav(selectedSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "mobile-menu-bar fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white/10 p-2 px-3 backdrop-blur-md sm:px-6 xl:hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "name text-lg font-medium", children: /* @__PURE__ */ jsxs("a", { className: "flex items-center gap-2 text-black dark:text-white", href: "/", children: [
        /* @__PURE__ */ jsx("img", { src: "/assets/img/site-logo.svg", alt: "Minfo" }),
        /* @__PURE__ */ jsx("span", { children: "Minfo" })
      ] }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "hamburger menu_toggle grid h-12 w-12 place-content-center rounded-full border border-platinum bg-white fill-theme-color dark:border-grey-black dark:bg-night-black dark:fill-white",
          type: "button",
          "aria-label": "Open Mobile Menu",
          onClick: () => setIsMenuOpen(true),
          children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 20 12", className: "w-6", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.33333 11.3333C5.33333 11.1565 5.40357 10.987 5.5286 10.8619C5.65362 10.7369 5.82319 10.6667 6 10.6667H19.3333C19.5101 10.6667 19.6797 10.7369 19.8047 10.8619C19.9298 10.987 20 11.1565 20 11.3333C20 11.5101 19.9298 11.6797 19.8047 11.8047C19.6797 11.9298 19.5101 12 19.3333 12H6C5.82319 12 5.65362 11.9298 5.5286 11.8047C5.40357 11.6797 5.33333 11.5101 5.33333 11.3333ZM2.66667 6C2.66667 5.82319 2.7369 5.65362 2.86193 5.5286C2.98695 5.40357 3.15652 5.33333 3.33333 5.33333H16.6667C16.8435 5.33333 17.013 5.40357 17.1381 5.5286C17.2631 5.65362 17.3333 5.82319 17.3333 6C17.3333 6.17681 17.2631 6.34638 17.1381 6.4714C17.013 6.59643 16.8435 6.66667 16.6667 6.66667H3.33333C3.15652 6.66667 2.98695 6.59643 2.86193 6.4714C2.7369 6.34638 2.66667 6.17681 2.66667 6ZM0 0.666667C0 0.489856 0.0702379 0.320287 0.195262 0.195262C0.320286 0.070238 0.489856 0 0.666667 0H14C14.1768 0 14.3464 0.070238 14.4714 0.195262C14.5964 0.320287 14.6667 0.489856 14.6667 0.666667C14.6667 0.843478 14.5964 1.01305 14.4714 1.13807C14.3464 1.2631 14.1768 1.33333 14 1.33333H0.666667C0.489856 1.33333 0.320286 1.2631 0.195262 1.13807C0.0702379 1.01305 0 0.843478 0 0.666667Z"
            }
          ) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: clsx(
          "mobile-menu no-scrollbar fixed top-0 z-[999] h-full w-full max-w-[15rem] overflow-y-scroll bg-flash-white px-8 py-12 transition-all duration-300 dark:bg-night-black xl:hidden",
          {
            "-right-full ": !isMenuOpen,
            "right-0": isMenuOpen
          }
        ),
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-grey-black text-xl text-white",
              "aria-label": "Close Menu",
              onClick: () => setIsMenuOpen(false),
              children: /* @__PURE__ */ jsx(CloseIcon, {})
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "menu-title mb-6 text-lg font-medium text-black dark:text-white", children: "Menu" }),
          /* @__PURE__ */ jsx("ul", { className: "main-menu space-y-8 font-normal", children: navegaciones.map((navegacion) => /* @__PURE__ */ jsx(
            "li",
            {
              className: clsx("group relative", {
                active: activeNav === navegacion.link
              }),
              children: /* @__PURE__ */ jsxs("a", { href: `#${navegacion.link}`, className: "group flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx("span", { className: "w-5 text-black group-[&.active]:text-theme-color dark:text-white", children: navegacion.icon }),
                /* @__PURE__ */ jsx("span", { className: "transition-colors group-hover:text-theme-color group-[&.active]:text-theme-color dark:group-[&.active]:text-white", children: navegacion.nombre })
              ] })
            },
            navegacion.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: clsx(
          "fixed left-0 top-0 z-[1] h-full w-full bg-black/60 transition-all duration-200 xl:hidden",
          {
            "invisible opacity-0": !isMenuOpen,
            "visible opacity-100": isMenuOpen
          }
        ),
        onClick: () => setIsMenuOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs("nav", { className: "sticky top-[50%] z-10 order-3 hidden h-fit translate-y-[-50%] flex-col items-center gap-4 rounded-[2.5rem] border border-platinum bg-snow-white px-2.5 py-4 dark:border-metal-black dark:bg-power-black xl:flex", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-[3.75rem] w-[3.75rem] place-content-center rounded-full border border-platinum dark:border-metal-black", children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: "/assets/img/site-logo.svg", alt: "Minfo" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "my-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-center", children: navegaciones.map((navegacion) => /* @__PURE__ */ jsx(
        "li",
        {
          className: clsx("group relative", {
            active: activeNav === navegacion.link
          }),
          children: /* @__PURE__ */ jsx(
            "a",
            {
              href: `#${navegacion.link}`,
              className: "grid h-9 w-9 place-content-center rounded-full text-theme-color transition-all duration-300 before:absolute before:right-10 before:w-max before:rounded-md before:bg-white before:px-4 before:py-2 before:text-sm before:font-normal before:opacity-0 before:transition-all before:duration-200 before:content-[attr(data-title)] after:absolute after:right-8 after:top-1/2 after:h-0 after:-translate-y-1/2 after:border-b-4 after:border-l-8 after:border-r-0 after:border-t-4 after:border-solid after:border-b-transparent after:border-l-white after:border-r-transparent after:border-t-transparent after:opacity-0 after:transition-all after:duration-200 after:content-[''] group-hover:bg-white group-hover:before:opacity-100 group-hover:after:opacity-100 group-[&.active]:bg-white dark:before:bg-metal-black dark:before:font-light dark:before:text-white dark:after:border-l-metal-black dark:group-hover:bg-metal-black dark:group-[&.active]:bg-metal-black",
              "data-title": navegacion.nombre,
              children: /* @__PURE__ */ jsx("span", { className: "text-black group-hover:text-theme-color group-[&.active]:text-theme-color dark:text-white", children: navegacion.icon })
            }
          )
        },
        navegacion.id
      )) }) })
    ] })
  ] });
};

const CogIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      stroke: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      fill,
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      "aria-label": "Logotipo de Config",
      role: "img",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z" }),
        /* @__PURE__ */ jsx("path", { d: "m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z" })
      ]
    }
  );
};

const MoonIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      fill: "none",
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
    }
  );
};

const SunIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      fill,
      strokeWidth: "0",
      viewBox: "0 0 512 512",
      width: size,
      height: size,
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" })
    }
  );
};

const ModeToggle = () => {
  const [theme, setThemeState] = useState(
    "theme-light"
  );
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);
  useEffect(() => {
    const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx(
        "fixed right-0 top-1/2 z-[9999] w-[15rem] -translate-y-1/2 transition xl:top-[6.5%] xl:translate-y-[-6.5%] 2xl:top-1/2 2xl:-translate-y-1/2",
        {
          "translate-x-[15rem]": !isActive,
          "translate-x-0": isActive
        }
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-[-3.75rem] grid h-[3.75rem] w-[3.75rem] cursor-pointer select-none place-content-center rounded-[.5rem_0_0_.5rem] bg-white text-black shadow-sm shadow-slate-400 dark:bg-night-black dark:text-white",
            onClick: () => setIsActive((prev) => !prev),
            children: /* @__PURE__ */ jsx(CogIcon, { className: "animate-spin text-[18px] [animation-duration:2000ms]" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "theme-select rounded-[0_0_0_.5rem] bg-white px-6 py-4 shadow-sm shadow-slate-400 dark:bg-night-black", children: [
          /* @__PURE__ */ jsx("h5", { className: "mb-2 text-lg font-medium text-black dark:text-white", children: "Theme Mode" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex-[1] cursor-pointer rounded-lg text-center text-xl transition",
                onClick: () => setThemeState("dark"),
                children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "flex w-full flex-col items-center justify-center gap-1 rounded-md border px-4 py-4 dark:bg-flash-white dark:text-black",
                    title: "Active Dark Theme",
                    children: /* @__PURE__ */ jsx(MoonIcon, {})
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex-[1] cursor-pointer rounded-lg text-center text-lg transition",
                onClick: () => setThemeState("theme-light"),
                children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "flex w-full flex-col items-center justify-center gap-1 rounded-md border bg-flash-white px-4 py-4 dark:border-flash-white dark:bg-transparent dark:text-white",
                    title: "Active Light Theme",
                    children: /* @__PURE__ */ jsx(SunIcon, {})
                  }
                )
              }
            )
          ] })
        ] })
      ]
    }
  );
};

const SkillsCarousel = ({ skills, type }) => {
  if (type === "habilidades-simple") {
    return /* @__PURE__ */ jsx(
      Swiper,
      {
        slidesPerView: 3,
        breakpoints: {
          400: {
            slidesPerView: 4
          }
        },
        spaceBetween: 20,
        children: skills.map((skill) => /* @__PURE__ */ jsxs(SwiperSlide, { className: "space-y-2 text-center xl:text-ellipsis", children: [
          /* @__PURE__ */ jsx(
            AnimatedProgressbar,
            {
              value: skill.porcentaje,
              className: "h-12 w-12 text-[27px] dark:text-white/50"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-[13px] font-normal text-black dark:font-light dark:text-white/90", children: skill.nombre })
        ] }, skill.id))
      }
    );
  }
  if (type === "habilidades") {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
      Swiper,
      {
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev"
        },
        pagination: {
          type: "fraction",
          el: ".swiper-paginations"
        },
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        breakpoints: {
          400: {
            slidesPerView: 2
          },
          600: {
            slidesPerView: 3
          },
          800: {
            slidesPerView: 4
          }
        },
        spaceBetween: 30,
        children: skills.map((skill) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-8", children: [
          /* @__PURE__ */ jsx("img", { src: "assets/img/skill/figma.svg", className: "dark:grayscale", alt: "Figma" }),
          /* @__PURE__ */ jsx(
            AnimatedProgressbar,
            {
              value: skill.porcentaje,
              className: "h-32 w-32 text-lg font-semibold dark:text-white md:h-40 md:w-40",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "text-black dark:text-white", children: skill.nombre })
        ] }) }, skill.id))
      }
    ) });
  }
  return /* @__PURE__ */ jsx("span", { children: "Seleccione un tipo por favor" });
};

const $$Astro$3 = createAstro();
const $$SidebarProfile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SidebarProfile;
  const profile = {
    foto: "assets/img/user-sidebar-thumb.png",
    nombre: "Brown Reddick",
    role: ["Desarrollador web", "Fot\xF3grafos", "Dise\xF1ador web"],
    residencia: "Canada",
    ciudad: "Toronto",
    experiencia: "10 a\xF1os",
    habilidades: [
      {
        id: 1,
        nombre: "HTML",
        porcentaje: 90
      },
      {
        id: 2,
        nombre: "CSS",
        porcentaje: 80
      },
      {
        id: 3,
        nombre: "JS",
        porcentaje: 80
      },
      {
        id: 4,
        nombre: "React",
        porcentaje: 90
      },
      {
        id: 5,
        nombre: "Next js",
        porcentaje: 90
      },
      {
        id: 6,
        nombre: "Astro js",
        porcentaje: 70
      }
    ]
  };
  return renderTemplate`<!-- Sidebar Profile Start -->${maybeRenderHead()}<aside data-astro-cid-3jvjilw3> <div class="mx-auto w-full max-w-[22.75rem] pt-20 xl:sticky xl:top-6 xl:mx-0 xl:max-w-[initial] xl:pt-0" data-astro-cid-3jvjilw3> <div class="mb-3 overflow-hidden rounded-2xl bg-white p-3 [clip-path:url(#my-clip-path)] dark:bg-night-black" data-astro-cid-3jvjilw3> <div class="mx-4 mt-12 text-center lg:mx-6" data-astro-cid-3jvjilw3> <a class="mx-auto mb-2.5 block h-36 w-36 overflow-hidden rounded-full border-[6px] border-platinum dark:border-[#2f2f2f]" href="/" data-astro-cid-3jvjilw3> <img${addAttribute(`/${profile.foto}`, "src")} class="hidden h-full w-full rounded-full dark:block"${addAttribute(profile.nombre, "alt")} data-astro-cid-3jvjilw3> <!--Image for Dark Version --> <img${addAttribute(`/${profile.foto}`, "src")} class="h-full w-full rounded-full dark:hidden"${addAttribute(profile.nombre, "alt")} data-astro-cid-3jvjilw3> <!--Image for Light Version --> </a> <h6 class="mb-1 text-lg font-semibold text-black dark:text-white" data-astro-cid-3jvjilw3> ${profile.nombre} </h6> <div class="cd-words-wrapper text-sm text-theme-color" data-astro-cid-3jvjilw3> ${profile.role.map((rol) => {
    return renderTemplate`<b class="font-normal" data-astro-cid-3jvjilw3>${rol}</b>`;
  })} </div> </div> <div class="mx-4 my-7 border-t border-platinum pt-6 dark:border-metal-black md:mx-7 lg:mx-6" data-astro-cid-3jvjilw3> <ul class="space-y-3" data-astro-cid-3jvjilw3> <li class="flex text-sm" data-astro-cid-3jvjilw3> <span class="flex-1 font-medium text-black dark:text-white" data-astro-cid-3jvjilw3>Residencia:</span> <span data-astro-cid-3jvjilw3>${profile.residencia}</span> </li> <li class="flex text-sm" data-astro-cid-3jvjilw3> <span class="flex-1 font-medium text-black dark:text-white" data-astro-cid-3jvjilw3>Ciudad:</span> <span data-astro-cid-3jvjilw3>${profile.ciudad}</span> </li> <li class="flex text-sm" data-astro-cid-3jvjilw3> <span class="flex-1 font-medium text-black dark:text-white" data-astro-cid-3jvjilw3>Experiencia:</span> <span data-astro-cid-3jvjilw3>${profile.experiencia}</span> </li> </ul> </div> <div class="rounded-2xl bg-flash-white px-4 py-5 dark:bg-metal-black md:px-8 lg:px-6 lg:py-6" data-astro-cid-3jvjilw3> <div class="text-sm font-medium text-black dark:text-white" data-astro-cid-3jvjilw3>Habilidades</div> <div class="my-4 flex items-center justify-between space-x-4" data-astro-cid-3jvjilw3> ${renderComponent($$result, "SkillsCarousel", SkillsCarousel, { "type": "habilidades-simple", "skills": profile.habilidades, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/shared/SkillsCarousel", "client:component-export": "SkillsCarousel", "data-astro-cid-3jvjilw3": true })} </div> <div class="mt-6" data-astro-cid-3jvjilw3> <a href="mycv.pdf" download target="_blank" class="flex items-center justify-center gap-2 rounded-full border border-theme-color bg-theme-color py-3.5 text-center text-[15px] text-sm font-semibold text-white transition duration-300 hover:border-theme-hover-color hover:bg-theme-hover-color" data-astro-cid-3jvjilw3>
DOWNLOAD CV
<span class="animate-bounce" data-astro-cid-3jvjilw3> <svg width="18" height="18" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3jvjilw3> <path d="M12.0724 4.92378C12.0726 4.91034 12.0726 4.89691 12.0726 4.88368C12.0726 2.53968 10.1657 0.632812 7.82171 0.632812C5.47771 0.632812 3.57084 2.53968 3.57084 4.88368C3.57084 4.89691 3.57084 4.91055 3.57104 4.92378C1.95417 5.0992 0.691406 6.47267 0.691406 8.13554C0.691406 9.91704 2.14059 11.3662 3.92209 11.3662H4.33138C4.55606 11.3662 4.7384 11.1839 4.7384 10.9592C4.7384 10.7345 4.55606 10.5522 4.33138 10.5522H3.92209C2.58952 10.5522 1.50544 9.46811 1.50544 8.13554C1.50544 6.80297 2.58952 5.71888 3.92209 5.71888H4.00309C4.11868 5.71888 4.22898 5.66963 4.30611 5.58355C4.38345 5.49726 4.42028 5.38248 4.40766 5.2673C4.3924 5.12769 4.38487 5.00233 4.38487 4.88348C4.38487 2.98842 5.92665 1.44664 7.82171 1.44664C9.71678 1.44664 11.2586 2.98842 11.2586 4.88348C11.2586 5.00233 11.251 5.12769 11.2358 5.2673C11.2231 5.38228 11.26 5.49726 11.3373 5.58355C11.4144 5.66963 11.5247 5.71888 11.6403 5.71888H11.7217C13.0541 5.71888 14.138 6.80297 14.138 8.13554C14.138 9.46811 13.0541 10.5522 11.7217 10.5522H11.288C11.0634 10.5522 10.881 10.7345 10.881 10.9592C10.881 11.1839 11.0634 11.3662 11.288 11.3662H11.7217C13.5028 11.3662 14.952 9.91704 14.952 8.13554C14.952 6.47247 13.6892 5.099 12.0724 4.92378Z" fill="white" data-astro-cid-3jvjilw3></path> <path d="M6.26314 11.942C6.0877 12.1876 6.26327 12.5288 6.5651 12.5288H8.81272L7.3764 14.5396C7.25728 14.7064 7.29591 14.9382 7.46268 15.0573C7.62945 15.1764 7.86122 15.1378 7.98034 14.971L9.83579 12.3734C10.0112 12.1278 9.83566 11.7866 9.53382 11.7866H7.2862L8.72252 9.77578C8.84164 9.609 8.80302 9.37724 8.63624 9.25811C8.46947 9.13899 8.23771 9.17762 8.11858 9.34439L6.26314 11.942Z" fill="white" data-astro-cid-3jvjilw3></path> </svg> </span> </a> </div> </div> <svg class="absolute h-0 w-0" data-astro-cid-3jvjilw3> <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox" stroke="white" stroke-width="2" data-astro-cid-3jvjilw3> <path d="M0.001,0.031 C0.001,0.014,0.026,0.001,0.055,0.001 H0.492 C0.506,0.001,0.52,0.004,0.53,0.009 L0.61,0.052 C0.62,0.057,0.634,0.06,0.649,0.06 H0.947 C0.977,0.06,1,0.074,1,0.091 V0.971 C1,0.987,0.977,1,0.947,1 H0.055 C0.026,1,0.001,0.987,0.001,0.971 V0.031" data-astro-cid-3jvjilw3></path> </clipPath> </svg> </div> </div> </aside> `;
}, "D:/documentos/GitHub/portafolio-grupo/src/components/shared/SidebarProfile.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<script>
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme')
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	}
	const isDark = getThemePreference() === 'dark'
	document.documentElement.classList[isDark ? 'add' : 'remove']('dark')

	if (typeof localStorage !== 'undefined') {
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('dark')
			localStorage.setItem('theme', isDark ? 'dark' : 'light')
		})
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		})
	}
<\/script> <html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="description"`, "><title>", "</title>", '</head> <body> <div class="container gap-6 px-4 xl:grid xl:grid-cols-[20rem_1fr_82.22px] xl:px-14"> ', " ", " ", " ", ' </div> <!-- Footer Start --> <footer class="container px-4 xl:px-14"> <div class="py-6 text-center xl:ml-[20rem] xl:mr-[82.22px]"> <p>\nCopyright by\n<a href="#" class="transition-colors">@domain.com</a> </p> </div> </footer> <!-- Footer End --> ', " </body></html>"])), addAttribute(description, "content"), title, renderHead(), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/shared/Header", "client:component-export": "Header" }), renderComponent($$result, "SidebarProfile", $$SidebarProfile, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "BackgroundAnimation", $$BackgroundAnimation, {}), renderComponent($$result, "ModeToggle", ModeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/shared/ModeToggle", "client:component-export": "ModeToggle" }));
}, "D:/documentos/GitHub/portafolio-grupo/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
async function getStaticPaths() {
  return proyectos.map(({ slug, image, title, type }) => {
    return {
      params: { slug: slug.toString() },
      props: { image, type, title }
    };
  });
}
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { image, type, title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Descripci\xF3n del portafolio", "title": "Titulo del portafolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-[65px]"> <div class="2xl:p-13 rounded-2xl bg-white px-5 py-8 dark:bg-night-black md:p-8 lg:p-10"> <div class="inline-flex items-center gap-2 rounded-full border border-platinum px-4 py-2 text-xs tracking-wide text-black dark:border-grey-black-200 dark:text-white lg:px-5"> ${renderComponent($$result2, "TaskIcon", TaskIcon, { "className": "text-theme-color" })}
Project Details
</div> <h2 class="article-title mt-7 text-2xl font-semibold leading-normal text-black dark:text-white lg:mt-10 lg:text-3xl lg:leading-normal"> ${title} </h2> <div class="thumb mb-4 mt-7 overflow-hidden rounded-xl xl:my-8 xl:rounded-2xl"> <img${addAttribute(`/${image}`, "src")} class="aspect-[16/8] w-full object-cover"${addAttribute(title, "alt")}> </div> <div class="post-meta my-8 mb-10 items-center justify-between max-sm:space-y-3.5 sm:flex"> <div> <h6 class="text-black dark:text-white">CLIENTE</h6> <p class="text-regular">Envato Tema</p> </div> <div> <h6 class="text-black dark:text-white">SERVICIOS:</h6> <p class="text-regular">Trucos y consejos, Diseño</p> </div> <div> <h6 class="text-black dark:text-white">DURACIÓN</h6> <p class="text-regular">108 horas</p> </div> </div> <div> <h3 class="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
Descripción del proyecto
</h3> <p class="text-regular !leading-[2]">
Las autoridades de patentes de todo el mundo se enfrentan al reto de redefinir su enfoque
					para gestionar las invenciones generadas no por el ingenio humano, sino por la IA. Esto ha
					suscitado considerable debate en la comunidad de la propiedad intelectual. Este análisis
					inicia una serie de tres partes que profundiza en la influencia de la IA en los derechos
					de propiedad intelectual.
</p> <div class="my-8 grid gap-5 sm:grid-cols-2 md:gap-8"> <div class="overflow-hidden rounded-xl xl:rounded-2xl"> <img src="/assets/img/portfolio/portfolio-img1-2.png" class="w-full" alt="Project Inner Colum Image"> </div> <div class="overflow-hidden rounded-xl xl:rounded-2xl"> <img src="/assets/img/portfolio/portfolio-img1-1.png" class="w-full" alt="Project Inner Colum Image"> </div> </div> <h3 class="mb-10 mt-12 text-2xl font-medium text-black dark:text-white">Tecnologías</h3> <div class="progressbar-wrap space-y-7"> <div class="progressbar flex flex-wrap items-center gap-5"> <div class="icon w-8"> <img src="/assets/img/skill/html.svg" alt="HTML5"> </div> <div class="bar flex-1"> <h5 class="progress-title-holder text-regular mb-2 text-black dark:text-white"> <span class="progress-title">HTML5</span> </h5> </div> </div> <div class="progressbar flex flex-wrap items-center gap-5"> <div class="icon w-8"> <img src="/assets/img/skill/css.svg" alt="CSS3"> </div> <div class="bar flex-1"> <h5 class="progress-title-holder text-regular mb-2 text-black dark:text-white"> <span class="progress-title">CSS3</span> </h5> </div> </div> <div class="progressbar flex flex-wrap items-center gap-5"> <div class="icon w-8"> <img src="/assets/img/skill/js.svg" alt="javascript"> </div> <div class="bar flex-1"> <h5 class="progress-title-holder text-regular mb-2 text-black dark:text-white"> <span class="progress-title">javascript</span> </h5> </div> </div> <div class="progressbar flex flex-wrap items-center gap-5"> <div class="icon w-8"> <img src="/assets/img/skill/tailwind.svg" alt="TailwindCSS"> </div> <div class="bar flex-1"> <h5 class="progress-title-holder text-regular mb-2 text-black dark:text-white"> <span class="progress-title">TailwindCSS</span> </h5> </div> </div> <div class="progressbar flex flex-wrap items-center gap-5"> <div class="icon w-8"> <img src="/assets/img/skill/figma.svg" alt="TailwindCSS"> </div> <div class="bar flex-1"> <h5 class="progress-title-holder text-regular mb-2 text-black dark:text-white"> <span class="progress-title">Figma</span> </h5> </div> </div> </div> </div> </div> </main> ` })}`;
}, "D:/documentos/GitHub/portafolio-grupo/src/pages/[slug]/index.astro", void 0);

const $$file$1 = "D:/documentos/GitHub/portafolio-grupo/src/pages/[slug]/index.astro";
const $$url$1 = "/[slug]";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  getStaticPaths,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Projects = asDrizzleTable("Projects", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Projects", "primaryKey": true } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "Projects", "primaryKey": false, "optional": false } }, "slug": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "slug", "collection": "Projects", "primaryKey": false, "optional": false } }, "image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "image", "collection": "Projects", "primaryKey": false, "optional": false } }, "type": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "type", "collection": "Projects", "primaryKey": false, "optional": false } }, "highlight": { "type": "json", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "highlight", "collection": "Projects" } }, "description": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "description", "collection": "Projects", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = await db.select().from(Projects);
  console.log({ projects });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Descripci\xF3n del portafolio", "title": "Titulo del portafolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-[65px] min-w-0 space-y-6"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "AcercaDe", $$AcercaDe, {})} ${renderComponent($$result2, "Servicios", $$Servicios, {})} ${renderComponent($$result2, "Habilidades", $$Habilidades, {})} ${renderComponent($$result2, "Curriculum", $$Curriculum, {})} ${renderComponent($$result2, "Portafolio", $$Portafolio, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} </main> ` })}`;
}, "D:/documentos/GitHub/portafolio-grupo/src/pages/index.astro", void 0);

const $$file = "D:/documentos/GitHub/portafolio-grupo/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };

import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute } from '../astro_CaB0z2uk.mjs';
import 'kleur/colors';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
/* empty css                          */

const AnimatedProgressbar = ({ value, className, strokeWidth = 4 }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress < value) {
      const increment = progress + 1 > value ? 0 : 1;
      const timer = setTimeout(() => {
        setProgress(progress + increment);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [progress, value]);
  return /* @__PURE__ */ jsx(
    CircularProgressbar,
    {
      className: `${className} text-black`,
      value: progress,
      text: `${progress}%`,
      styles: buildStyles({
        pathTransition: progress === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
        pathColor: "#069c7a",
        textColor: "currentColor",
        textSize: "1em",
        trailColor: "#999999"
      }),
      strokeWidth
    }
  );
};

const GraduationsIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx("path", { d: "M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z" })
    }
  );
};

const $$Astro = createAstro();
const $$Habilidades = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Habilidades;
  const habilidades = [
    {
      id: 1,
      nombre: "HTML",
      porcentaje: 90,
      image: "assets/img/skill/html.svg"
    },
    {
      id: 2,
      nombre: "CSS",
      porcentaje: 80,
      image: "assets/img/skill/css.svg"
    },
    {
      id: 3,
      nombre: "JS",
      porcentaje: 80,
      image: "assets/img/skill/js.svg"
    },
    {
      id: 4,
      nombre: "React",
      porcentaje: 90,
      image: "assets/img/skill/js.svg"
    },
    {
      id: 5,
      nombre: "Next js",
      porcentaje: 90,
      image: "assets/img/skill/figma.svg"
    },
    {
      id: 6,
      nombre: "Astro js",
      porcentaje: 70,
      image: "assets/img/skill/webflow.svg"
    }
  ];
  return renderTemplate`<style>
	.skills-slider-navigation .swiper-pagination-current {
		color: #00bc91;
	}
</style>${maybeRenderHead()}<section id="habilidades" class="relative rounded-2xl bg-white px-5 py-8 dark:bg-night-black md:p-8 lg:p-10 2xl:p-12"> <div class="inline-flex items-center gap-2 rounded-full border border-platinum px-4 py-2 text-xs tracking-wide text-black dark:border-grey-black-200 dark:text-white lg:px-5"> ${renderComponent($$result, "GraduationsIcon", GraduationsIcon, { "className": "text-theme-color" })}
SKILLS
</div> <div class="mb-8 mt-7 md:my-10"> <h2 class="text-[32px] font-extralight leading-[1.27] text-black dark:text-white md:text-4xl lg:text-5xl">
Mi <span class="font-semibold text-theme-color">Ventajas</span> </h2> <p class="mt-4 max-w-xl md:mt-6">
Diseño productos que son más que bonitos. Los hago enviables y utilizables, ttempor non mollit
			dolor et do aute
</p> </div> <div class="skills-slider mt-12 xl:mt-16"> <div class="swiper"> <div class="swiper-wrapper"> ${habilidades.map((habilidad) => renderTemplate`<div class="swiper-slide"> <div class="flex flex-col items-center gap-4"> <img${addAttribute(habilidad.image, "src")} class="dark:grayscale"${addAttribute(habilidad.nombre, "alt")}> ${renderComponent($$result, "AnimatedProgressbar", AnimatedProgressbar, { "strokeWidth": 1, "value": habilidad.porcentaje, "client:visible": true, "className": "h-32 w-32 text-lg font-semibold dark:text-white md:h-40 md:w-40", "client:component-hydration": "visible", "client:component-path": "@/components/shared/AnimatedProgressbar", "client:component-export": "AnimatedProgressbar" })} <div class="name text-black dark:text-white">${habilidad.nombre}</div> </div> </div>`)} </div> </div> </div> <!-- Slider Controls Start --> <div class="skills-slider-navigation lg:right-13 mt-12 flex items-center justify-center gap-2.5 md:absolute md:right-8 md:top-16 lg:top-20"> <button class="button-prev group grid h-11 w-11 place-content-center rounded-full border border-platinum transition hover:border-theme-color hover:bg-theme-color dark:border-grey-black" aria-label="Previous"> <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18 5.08006C18 4.77812 17.7121 4.5334 17.3571 4.5334L2.19486 4.5334L6.07553 0.933214C6.32659 0.719715 6.32659 0.373628 6.07553 0.160126C5.82448 -0.0533767 5.41745 -0.0533766 5.1664 0.160126L0.188289 4.69352C-0.0627618 4.90702 -0.0627618 5.2531 0.188289 5.4666L5.33115 9.83986C5.5822 10.0534 5.98923 10.0534 6.24028 9.83986C6.49134 9.62637 6.49134 9.28028 6.24028 9.06678L2.19486 5.62672L17.3571 5.62671C17.7121 5.62671 18 5.38199 18 5.08006Z" class="fill-[#A0A0A0] group-hover:fill-white"></path> </svg> </button> <div class="counter swiper-paginations text-center text-sm font-light text-black dark:text-white"></div> <button class="button-next group grid h-11 w-11 place-content-center rounded-full border border-platinum transition hover:border-theme-color hover:bg-theme-color dark:border-grey-black" aria-label="Next"> <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.44113e-07 4.91994C4.17717e-07 5.22187 0.287871 5.4666 0.642857 5.4666L15.8051 5.4666L11.9245 9.06678C11.6734 9.28028 11.6734 9.62637 11.9245 9.83987C12.1755 10.0534 12.5826 10.0534 12.8336 9.83987L17.8117 5.30648C18.0628 5.09298 18.0628 4.7469 17.8117 4.5334L12.6688 0.160134C12.4178 -0.0533766 12.0108 -0.0533766 11.7597 0.160134C11.5087 0.373633 11.5087 0.719718 11.7597 0.933218L15.8051 4.37328L0.642857 4.37328C0.287872 4.37328 4.70509e-07 4.61801 4.44113e-07 4.91994Z" class="fill-[#A0A0A0] group-hover:fill-white"></path> </svg> </button> </div> <!-- Slider Controls End --> </section> `;
}, "D:/documentos/GitHub/portafolio-grupo/src/pages/sections/Habilidades.astro", void 0);

const $$file = "D:/documentos/GitHub/portafolio-grupo/src/pages/sections/Habilidades.astro";
const $$url = "/sections/Habilidades";

const Habilidades = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Habilidades,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Habilidades as $, AnimatedProgressbar as A, GraduationsIcon as G, Habilidades as H };

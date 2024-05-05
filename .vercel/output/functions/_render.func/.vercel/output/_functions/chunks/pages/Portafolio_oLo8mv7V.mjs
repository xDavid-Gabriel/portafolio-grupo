import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute } from '../astro_CaB0z2uk.mjs';
import 'kleur/colors';
import { jsx } from 'react/jsx-runtime';
import 'react';
import clsx from 'clsx';

const TaskIcon = ({
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
      children: /* @__PURE__ */ jsx("path", { d: "M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" })
    }
  );
};

const $$Astro$1 = createAstro();
const proyectos = [
  {
    id: 1,
    title: "Innovaci\xF3n en dise\xF1o industrial",
    slug: "innovacion-en-disenio-industrial",
    image: "assets/img/portfolio/portfolio-img1.png",
    type: "Marca",
    highlight: ["Innovaci\xF3n"]
  },
  {
    id: 2,
    title: "Creatividad y arte moderno",
    slug: "creatividad-y-arte-maderno",
    image: "assets/img/portfolio/portfolio-img2.png",
    type: "Marca",
    highlight: ["arte", "moderno"]
  },
  {
    id: 3,
    title: "Desarrollo sostenible en arquitectura",
    slug: "desarrollo-sostenible-en-arquitectura",
    image: "assets/img/portfolio/portfolio-img3.png",
    type: "Marca",
    highlight: ["sostenible"]
  },
  {
    id: 4,
    title: "Estrategias de marketing digital",
    slug: "estrategias-de-marketing-digital",
    image: "assets/img/portfolio/portfolio-img4.png",
    type: "Marca",
    highlight: ["marketing", "digital"]
  },
  {
    id: 5,
    title: "Tendencias en tecnolog\xEDa educativa",
    slug: "tendencias-en-tecnologia-educativa",
    image: "assets/img/portfolio/portfolio-img4.png",
    type: "Marca",
    highlight: ["tecnolog\xEDa", "educativa"]
  },
  {
    id: 6,
    title: "Especializaci\xF3n en dise\xF1o de interiores",
    slug: "especializacion-en-disenio-de-interiores",
    image: "assets/img/portfolio/portfolio-img4.png",
    type: "Marca",
    highlight: ["dise\xF1o", "interiores"]
  },
  {
    id: 7,
    title: "El futuro de la inteligencia artificial",
    slug: "el-futuro-de-la-inteligencia-artificial",
    image: "assets/img/portfolio/portfolio-img2.png",
    type: "Marca",
    highlight: ["inteligencia", "artificial"]
  }
];
const $$Data = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Data;
  return renderTemplate``;
}, "D:/documentos/GitHub/portafolio-grupo/src/data/data.astro", void 0);

const $$Astro = createAstro();
const $$Portafolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portafolio;
  return renderTemplate`${maybeRenderHead()}<section class="rounded-2xl bg-white px-5 py-8 dark:bg-night-black md:p-8 lg:p-10 2xl:p-12" id="portafolio"> <div class="inline-flex items-center gap-2 rounded-full border border-platinum px-4 py-2 text-xs tracking-wide text-black dark:border-grey-black-200 dark:text-white lg:px-5"> ${renderComponent($$result, "TaskIcon", TaskIcon, { "className": "text-theme-color" })}
PORTAFOLIO
</div> <div class="mb-8 mt-5 md:my-10"> <h2 class="text-[32px] font-extralight leading-[1.27] text-black dark:text-white md:text-4xl lg:text-5xl">
Destacados
<span class="font-semibold text-theme-color">Proyectos</span> </h2> <p class="subtitle mt-4 max-w-xl md:mt-6">
Diseño productos que son más que bonitos. Los hago enviables y utilizables, ttempor non mollit
			dolor et do aute
</p> </div> <!--./section-title--> <div class="grid gap-4 sm:grid-cols-2 lg:gap-[1.875rem]"> ${proyectos.map((proyecto, index) => {
    let patternIndex = index % 6;
    let span;
    if (patternIndex === 0 || patternIndex === 3) {
      span = 2;
    } else {
      span = 1;
    }
    const words = proyecto.title.split(" ");
    return renderTemplate`<div${addAttribute(clsx("group relative z-[1]", {
      "md:col-span-2": span === 2,
      "md:col-span-1": span === 1
    }), "class")}> <a class="block overflow-hidden rounded-xl border border-platinum p-3 dark:border-grey-black md:p-4"${addAttribute(`/${proyecto.slug}`, "href")}> <div class="img-wrapper"> <img${addAttribute(proyecto.image, "src")}${addAttribute(clsx(
      "w-full rounded-lg object-cover transition-all duration-300 group-hover:blur-[1.5px] max-md:min-h-[17rem] max-md:w-full max-md:object-center",
      {
        "md:aspect-[16/8]": span === 2,
        "md:aspect-[16/16]": span === 1
      }
    ), "class")}${addAttribute(proyecto.title, "alt")}> <div class="overlay absolute inset-0 rounded-xl bg-gradient-to-t from-white to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100 dark:from-black"></div> </div> <div class="position-center z-10 scale-110 text-center text-[2.45rem] font-semibold leading-[1.15] text-black opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100 dark:text-white max-lg:text-3xl xl:text-[1.5rem] 2xl:text-[2rem]">  ${words.map((word, index2) => {
      const isStyled = proyecto.highlight.includes(word);
      return renderTemplate`<span${addAttribute(clsx({ "text-stroke": isStyled }), "class")}> ${word} ${index2 < words.length - 1 ? " " : ""} </span>`;
    })} </div> </a> <ul class="absolute right-6 top-6 z-10 opacity-0 transition-all duration-500 group-hover:opacity-100 md:right-9 md:top-9"> <li> <a href="#" class="inline-flex items-center gap-2 rounded-3xl bg-metal-black px-5 py-3 text-sm font-light leading-none text-white transition-colors hover:text-theme-color"> ${proyecto.type} </a> </li> </ul> </div>`;
  })} <!--./portfolio-card--> </div> <div class="more-blogs md:mt-13 mt-10 text-center"> <a href="#" class="inline-flex items-center gap-2 rounded-full border border-theme-color bg-theme-color px-9 py-[1.125rem] text-[15px] font-medium leading-none text-white transition-all duration-300 hover:border-theme-hover-color hover:bg-theme-hover-color">More Projects
</a> </div> </section>`;
}, "D:/documentos/GitHub/portafolio-grupo/src/pages/sections/Portafolio.astro", void 0);

const $$file = "D:/documentos/GitHub/portafolio-grupo/src/pages/sections/Portafolio.astro";
const $$url = "/sections/Portafolio";

const Portafolio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portafolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Portafolio as $, Portafolio as P, TaskIcon as T, proyectos as p };

import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_CaB0z2uk.mjs';
import 'kleur/colors';
import { jsx } from 'react/jsx-runtime';
import 'react';

const ResumenIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 384 512",
      width: size,
      height: size,
      fill,
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z" })
    }
  );
};

const $$Astro = createAstro();
const $$Curriculum = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Curriculum;
  const experiences = [
    {
      company: "Mercado Envato",
      position: "Dise\xF1ador jefe de UX",
      period: "Mar, 2022 - Actual",
      description: "Debido a los avances en el producto otras tecnolog\xEDas de dise\xF1o aute voluptate."
    },
    {
      company: "Google",
      position: "Dise\xF1ador UX",
      period: "2018 - 2022",
      description: "Debido a los avances en el producto otras tecnolog\xEDas de dise\xF1o aute voluptate."
    },
    {
      company: "Apple",
      position: "Dise\xF1ador de interfaz humana",
      period: "2014-2018",
      description: "Debido a los avances en el producto otras tecnolog\xEDas de dise\xF1o aute voluptate."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="curriculum" class="rounded-2xl bg-white px-5 py-8 dark:bg-night-black md:p-8 lg:p-10 2xl:p-12"> <div class="inline-flex items-center gap-2 rounded-full border border-platinum px-4 py-2 text-xs tracking-wide text-black dark:border-grey-black-200 dark:text-white lg:px-5"> ${renderComponent($$result, "ResumenIcon", ResumenIcon, { "className": "text-theme-color" })}
CURRICULUM
</div> <div class="mb-8 mt-7 md:my-10"> <h2 class="text-[32px] font-extralight leading-[1.27] text-black dark:text-white md:text-4xl lg:text-5xl">
Experiencia <span class="font-semibold text-theme-color">Laboral</span> </h2> <p class="subtitle mt-4 max-w-xl md:mt-6">
Diseño productos que son más que bonitos. Los hago enviables y utilizables, tempor non mollit
			dolor et do aute
</p> </div> <div class="experience"> <ul class="relative space-y-5 md:space-y-11 md:before:absolute md:before:left-64 md:before:top-1/2 md:before:h-[calc(100%_-1.5rem)] md:before:-translate-y-1/2 md:before:border-r md:before:border-platinum md:before:content-[''] md:dark:before:border-metal-black"> ${experiences.map((exp) => renderTemplate`<li class="rounded-xl border border-platinum p-5 dark:border-metal-black max-md:space-y-2 md:flex md:rounded-none md:border-0 md:p-0"> <div class="mb-5 flex items-center justify-between md:mb-0 md:block md:w-64"> <h6 class="text-sm font-medium text-black text-opacity-60 dark:text-white md:text-base md:text-opacity-100"> ${exp.company} </h6> <p class="text-theme text-[13px] md:text-sm">${exp.period}</p> </div> <div class="relative md:flex-1 md:pl-16 md:before:absolute md:before:-left-1 md:before:top-3 md:before:h-2 md:before:w-2 md:before:rounded-full md:before:bg-theme-color md:before:shadow-[0_0_0_.5rem_rgba(255,255,255,0.15)] md:before:content-['']"> <h4 class="mb-2.5 text-xl font-medium leading-7 text-black dark:text-white xl:text-2xl xl:font-medium"> ${exp.position} </h4> <p>${exp.description}</p> </div> </li>`)} </ul> </div> </section>`;
}, "D:/documentos/GitHub/portafolio-grupo/src/pages/sections/Curriculum.astro", void 0);

const $$file = "D:/documentos/GitHub/portafolio-grupo/src/pages/sections/Curriculum.astro";
const $$url = "/sections/Curriculum";

const Curriculum = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Curriculum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Curriculum as $, Curriculum as C, ResumenIcon as R };

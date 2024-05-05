import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_CaB0z2uk.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
/* empty css                         */

const ChecksIcon = ({ size = "1em", fill = "currentColor", ...props }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      stroke: "currentColor",
      strokeWidth: "2",
      viewBox: "0 0 24 24",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      width: size,
      height: size,
      fill: "none",
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M7 12l5 5l10 -10" }),
        /* @__PURE__ */ jsx("path", { d: "M2 12l5 5m5 -5l5 -5" })
      ]
    }
  );
};

const HomeIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 1024 1024",
      width: size,
      height: size,
      fill,
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M1016.7 513.36L536.331 10.192a31.924 31.924 0 0 0-23.088-9.84 32.038 32.038 0 0 0-23.088 9.84L7.307 513.344c-12.24 12.752-11.808 32.992.944 45.248 12.752 12.224 32.992 11.872 45.248-.944l43.007-44.832v478.832c0 17.68 14.336 32 32 32h223.552c17.632 0 31.936-14.256 32-31.905l1.008-319.664h254.992v319.568c0 17.68 14.32 32 32 32H895.53c17.68 0 32-14.32 32-32V512.655l42.992 45.04a31.997 31.997 0 0 0 23.09 9.84c7.967 0 15.967-2.944 22.16-8.944 12.736-12.224 13.152-32.48.928-45.232zm-153.165-58.544v504.831H704.063V640.095c0-17.68-14.32-32-32-32h-318.88c-17.632 0-31.936 14.256-32 31.904l-1.008 319.664H160.511V454.815c0-2.64-.416-5.168-1.008-7.632L513.263 78.56l351.424 368.208c-.688 2.592-1.152 5.264-1.152 8.048z" })
    }
  );
};

const PaperPlanIcon = ({ size = "1em", fill = "currentColor", ...props }) => {
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
      children: /* @__PURE__ */ jsx("path", { d: "M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z" })
    }
  );
};

const $$Astro = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="rounded-2xl bg-white px-5 py-8 dark:bg-night-black md:p-8 lg:p-10 2xl:p-12" data-astro-cid-cwacekji> <div class="inline-flex items-center gap-2 rounded-full border border-platinum px-4 py-2 text-xs tracking-wide text-black dark:border-grey-black-200 dark:text-white lg:px-5" data-astro-cid-cwacekji> ${renderComponent($$result, "HomeIcon", HomeIcon, { "className": "text-theme-color", "data-astro-cid-cwacekji": true })}
PRESENTACIÓN
</div> <div class="items-center gap-6 md:flex xl:gap-10" data-astro-cid-cwacekji> <div class="pt-7 max-lg:max-w-[30rem] lg:pt-8" data-astro-cid-cwacekji> <h1 class="mb-4 text-[32px] font-semibold leading-[1.27] text-black dark:text-white lg:mb-5 lg:text-5xl xl:text-4xl 2xl:text-5xl" data-astro-cid-cwacekji>
Elaboro el <br data-astro-cid-cwacekji> <span class="text-theme-color" data-astro-cid-cwacekji>Paisaje digital</span> </h1> <p data-astro-cid-cwacekji>
Soy un
<span class="font-medium text-black dark:text-white/90" data-astro-cid-cwacekji>Desarrollador Frontend</span>
en el fondo y, creo características que son las más adecuadas para el trabajo en cuestión.
</p> <ul class="-mx-3 mt-4 flex items-center lg:mt-5" data-astro-cid-cwacekji> <li class="mx-3 flex items-center text-[0.94rem]" data-astro-cid-cwacekji> ${renderComponent($$result, "ChecksIcon", ChecksIcon, { "className": "text-theme-color mr-2 text-[20px] flex-none", "data-astro-cid-cwacekji": true })}
Disponible para trabajar
</li> <li class="mx-3 flex items-center text-[0.94rem]" data-astro-cid-cwacekji> ${renderComponent($$result, "ChecksIcon", ChecksIcon, { "className": "text-theme-color mr-2 text-[20px] flex-none", "data-astro-cid-cwacekji": true })}
Trabajo a tiempo completo
</li> </ul> <ul class="mt-7" data-astro-cid-cwacekji> <li data-astro-cid-cwacekji> <a href="#contacto" class="btn-theme md:py-4.5 inline-flex items-center gap-2 rounded-full bg-theme-color px-7 py-4 text-[15px] font-medium leading-none text-white transition-all duration-300 hover:shadow-[0px_5px_10px_0px_rgba(0,188,145,0.30)] md:text-base lg:px-9" data-astro-cid-cwacekji> ${renderComponent($$result, "PaperPlanIcon", PaperPlanIcon, { "data-astro-cid-cwacekji": true })}
CONTRATAME
</a> </li> </ul> </div> <div class="flex-[0_0_20.3rem] max-md:hidden" data-astro-cid-cwacekji> <img src="assets/img/hero-img-1.png" class="dark:hidden" alt="Hero Image - Light Mode" data-astro-cid-cwacekji> <img src="assets/img/hero-img-2.png" class="hidden dark:block" alt="Hero Image - Dark Mode" data-astro-cid-cwacekji> </div> </div> <div class="mb-2 mt-14 xl:mb-0 xl:mt-20" data-astro-cid-cwacekji> <div class="grid-cols-12 items-center overflow-hidden md:grid" data-astro-cid-cwacekji> <div class="col-span-2 hidden md:inline-block" data-astro-cid-cwacekji> <h6 class="border-l border-theme-color pl-4 text-sm font-medium text-black dark:text-white/80 md:max-w-[8rem]" data-astro-cid-cwacekji>
Empresas de confianza
</h6> </div> <div class="logo-slider col-span-10" data-astro-cid-cwacekji> <div class="slider" data-astro-cid-cwacekji> <div class="slides" data-astro-cid-cwacekji> <div class="slide" data-astro-cid-cwacekji> <a href="#" class="flex-center transition duration-200" data-astro-cid-cwacekji> <img src="assets/img/partners/logo1.svg" alt="Partner Name" data-astro-cid-cwacekji> </a> </div> <div class="slide" data-astro-cid-cwacekji> <a href="#" class="flex-center transition duration-200" data-astro-cid-cwacekji> <img src="assets/img/partners/logo2.svg" alt="Partner Name" data-astro-cid-cwacekji> </a> </div> <div class="slide" data-astro-cid-cwacekji> <a href="#" class="flex-center transition duration-200" data-astro-cid-cwacekji> <img src="assets/img/partners/logo3.svg" alt="Partner Name" data-astro-cid-cwacekji> </a> </div> <div class="slide" data-astro-cid-cwacekji> <a href="#" class="flex-center transition duration-200" data-astro-cid-cwacekji> <img src="assets/img/partners/logo4.svg" alt="Partner Name" data-astro-cid-cwacekji> </a> </div> <div class="slide" data-astro-cid-cwacekji> <a href="#" class="flex-center transition duration-200" data-astro-cid-cwacekji> <img src="assets/img/partners/logo2.svg" alt="Partner Name" data-astro-cid-cwacekji> </a> </div> <div class="slide" data-astro-cid-cwacekji> <a href="#" class="flex-center transition duration-200" data-astro-cid-cwacekji> <img src="assets/img/partners/logo4.svg" alt="Partner Name" data-astro-cid-cwacekji> </a> </div> <div class="slide" data-astro-cid-cwacekji> <a href="#" class="flex-center transition duration-200" data-astro-cid-cwacekji> <img src="assets/img/partners/logo2.svg" alt="Partner Name" data-astro-cid-cwacekji> </a> </div> <div class="slide" data-astro-cid-cwacekji> <a href="#" class="flex-center transition duration-200" data-astro-cid-cwacekji> <img src="assets/img/partners/logo4.svg" alt="Partner Name" data-astro-cid-cwacekji> </a> </div> <div class="slide" data-astro-cid-cwacekji> <a href="#" class="flex-center transition duration-200" data-astro-cid-cwacekji> <img src="assets/img/partners/logo2.svg" alt="Partner Name" data-astro-cid-cwacekji> </a> </div> </div> </div> </div> </div> </div> </section>`;
}, "D:/documentos/GitHub/portafolio-grupo/src/pages/sections/Hero.astro", void 0);

const $$file = "D:/documentos/GitHub/portafolio-grupo/src/pages/sections/Hero.astro";
const $$url = "/sections/Hero";

const Hero = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Hero,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, HomeIcon as H, Hero as a };

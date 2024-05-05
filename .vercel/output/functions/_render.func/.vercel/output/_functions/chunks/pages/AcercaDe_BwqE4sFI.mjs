import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_CaB0z2uk.mjs';
import 'kleur/colors';
import { jsx } from 'react/jsx-runtime';
import 'react';

const AcercaDeIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 448 512",
      width: size,
      height: size,
      fill,
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", { d: "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" })
    }
  );
};

const $$Astro = createAstro();
const $$AcercaDe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AcercaDe;
  return renderTemplate`${maybeRenderHead()}<section id="acerca-de" class="rounded-2xl bg-white px-5 py-8 dark:bg-night-black md:p-8 lg:p-10 2xl:p-12"> <div class="inline-flex items-center gap-2 rounded-full border border-platinum px-4 py-2 text-xs tracking-wide text-black dark:border-grey-black-200 dark:text-white lg:px-5"> ${renderComponent($$result, "AcercaDeIcon", AcercaDeIcon, { "className": "text-theme-color" })}
ABOUT ME
</div> <div class="mt-7 md:mt-10"> <h2 class="text-[32px] font-extralight leading-[1.27] text-black dark:text-white md:text-4xl lg:text-5xl">
About <span class="font-semibold text-theme-color">Me</span> </h2> <p class="mt-4 max-w-2xl md:mt-6">
Hola, me llamo <span class="text-black dark:text-white">Marrón Reddick</span> y empecé a usar WordPress
			cuando empecé. He pasado la mayor parte de mis horas de vigilia durante los últimos diez años diseñando,
			programando y operando <span class="text-black dark:text-white"> WordPress</span> sitios van más
			allá con exclusivos de diseño.
</p> </div> <div class="mt-6"> <!-- <div class="mb-5 inline-flex flex-wrap items-center gap-2 text-sm md:gap-4">
			<a
				href="#"
				class="dark:border-greyBlack md: hover:text-theme inline-block rounded-3xl border border-dashed border-platinum px-3.5 py-2 text-black transition duration-300 dark:text-white/70 dark:hover:text-white md:px-5 md:py-2"
			>
				HTML5 &amp; CSS3 (94%)
			</a>
			<a
				href="#"
				class="dark:border-greyBlack md: hover:text-theme inline-block rounded-3xl border border-dashed border-platinum px-3.5 py-2 text-black transition duration-300 dark:text-white/70 dark:hover:text-white md:px-5 md:py-2"
			>
				Bootstrap (98%)
			</a>
			<a
				href="#"
				class="dark:border-greyBlack md: hover:text-theme inline-block rounded-3xl border border-dashed border-platinum px-3.5 py-2 text-black transition duration-300 dark:text-white/70 dark:hover:text-white md:px-5 md:py-2"
			>
				TailwindCSS (90%)
			</a>
		</div> --> <!-- Contador de proyectos --> <ul class="mb-10 mt-4 grid gap-x-8 gap-y-3 text-sm md:grid-cols-2 lg:mt-6" id="counters"> <li class="flex items-center"> <span class="flex-[0_0_7rem] sm:flex-[0_0_10rem]">Teléfono</span> <span class="flex-[0_0_2rem]">:</span> <span class="break-all text-black dark:text-white">+(2) 870 174 302 </span> </li> <li class="flex items-center"> <span class="flex-[0_0_7rem] sm:flex-[0_0_10rem]">Correo electrónico</span> <span class="flex-[0_0_2rem]">:</span> <span class="break-all text-black dark:text-white">info@example.com</span> </li> <li class="flex items-center"> <span class="flex-[0_0_7rem] sm:flex-[0_0_10rem]">Github</span> <span class="flex-[0_0_2rem]">:</span> <span class="break-all text-black dark:text-white">github.com/user</span> </li> <li class="flex items-center"> <span class="flex-[0_0_7rem] sm:flex-[0_0_10rem]">Idioma</span> <span class="flex-[0_0_2rem]">:</span> <span class="break-all text-black dark:text-white">English, Dutch, Spanish</span> </li> </ul> <ul class="grid grid-cols-2 gap-6 md:grid-cols-4 xl:gap-8"> <li class=""> <div class="mb-1 text-2xl font-semibold text-theme-color md:text-3xl 2xl:text-4xl"> <span class="num" data-val="180">000</span>+
</div> <div class="text-sm">Años de experiencia</div> </li> <li class=""> <div class="mb-1 text-2xl font-semibold text-theme-color md:text-3xl 2xl:text-4xl"> <span class="num" data-val="12">00</span>+
</div> <div class="text-sm">Proyectos gestionados</div> </li> <li class=""> <div class="mb-1 text-2xl font-semibold text-theme-color md:text-3xl 2xl:text-4xl"> <span class="num" data-val="5">0</span>+
</div> <div class="text-sm">Bibliotecas de código abierto</div> </li> <li class=""> <div class="mb-1 text-2xl font-semibold text-theme-color md:text-3xl 2xl:text-4xl"> <span class="num" data-val="18">00</span> </div> <div class="text-sm">Premios obtenidos</div> </li> </ul> </div> </section> `;
}, "D:/documentos/GitHub/portafolio-grupo/src/pages/sections/AcercaDe.astro", void 0);

const $$file = "D:/documentos/GitHub/portafolio-grupo/src/pages/sections/AcercaDe.astro";
const $$url = "/sections/AcercaDe";

const AcercaDe = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AcercaDe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AcercaDe as $, AcercaDeIcon as A, AcercaDe as a };

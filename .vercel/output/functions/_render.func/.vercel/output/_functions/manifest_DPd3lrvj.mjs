import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_CaB0z2uk.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/projects/get-projects.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/projects\\/get-projects\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}],[{"content":"get-projects.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/projects/get-projects.json.ts","pathname":"/api/projects/get-projects.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BjIgJEjM.js"}],"styles":[],"routeData":{"route":"/sections/acercade","isIndex":false,"type":"page","pattern":"^\\/sections\\/AcercaDe\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"AcercaDe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/AcercaDe.astro","pathname":"/sections/AcercaDe","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sections/contacto","isIndex":false,"type":"page","pattern":"^\\/sections\\/Contacto\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"Contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/Contacto.astro","pathname":"/sections/Contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sections/curriculum","isIndex":false,"type":"page","pattern":"^\\/sections\\/Curriculum\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"Curriculum","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/Curriculum.astro","pathname":"/sections/Curriculum","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B0TMBnsx.js"}],"styles":[{"type":"inline","content":".CircularProgressbar{width:100%;vertical-align:middle}.CircularProgressbar .CircularProgressbar-path{stroke:#3e98c7;stroke-linecap:round;transition:stroke-dashoffset .5s ease 0s}.CircularProgressbar .CircularProgressbar-trail{stroke:#d6d6d6;stroke-linecap:round}.CircularProgressbar .CircularProgressbar-text{fill:#3e98c7;font-size:20px;dominant-baseline:middle;text-anchor:middle}.CircularProgressbar .CircularProgressbar-background{fill:#d6d6d6}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background{fill:#3e98c7}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text{fill:#fff}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path{stroke:#fff}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail{stroke:transparent}\n"}],"routeData":{"route":"/sections/habilidades","isIndex":false,"type":"page","pattern":"^\\/sections\\/Habilidades\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"Habilidades","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/Habilidades.astro","pathname":"/sections/Habilidades","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".slider[data-astro-cid-cwacekji]{overflow:hidden;white-space:nowrap;position:relative;width:100%}.slides[data-astro-cid-cwacekji]{display:flex;gap:30px;animation:slideAnimation 10s linear infinite}.slide[data-astro-cid-cwacekji]{width:25%;flex-shrink:0;transform:translateZ(0);display:inline-block;white-space:normal}@media (min-width: 768px){.slides[data-astro-cid-cwacekji]{gap:0}}@keyframes slideAnimation{0%{transform:translateZ(0)}to{transform:translate3d(-100%,0,0)}}\n"}],"routeData":{"route":"/sections/hero","isIndex":false,"type":"page","pattern":"^\\/sections\\/Hero\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"Hero","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/Hero.astro","pathname":"/sections/Hero","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sections/portafolio","isIndex":false,"type":"page","pattern":"^\\/sections\\/Portafolio\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"Portafolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/Portafolio.astro","pathname":"/sections/Portafolio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sections/servicios","isIndex":false,"type":"page","pattern":"^\\/sections\\/Servicios\\/?$","segments":[[{"content":"sections","dynamic":false,"spread":false}],[{"content":"Servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sections/Servicios.astro","pathname":"/sections/Servicios","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.9CACt749.js"}],"styles":[{"type":"external","src":"/_astro/index.BELyaks2.css"},{"type":"inline","content":".CircularProgressbar{width:100%;vertical-align:middle}.CircularProgressbar .CircularProgressbar-path{stroke:#3e98c7;stroke-linecap:round;transition:stroke-dashoffset .5s ease 0s}.CircularProgressbar .CircularProgressbar-trail{stroke:#d6d6d6;stroke-linecap:round}.CircularProgressbar .CircularProgressbar-text{fill:#3e98c7;font-size:20px;dominant-baseline:middle;text-anchor:middle}.CircularProgressbar .CircularProgressbar-background{fill:#d6d6d6}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background{fill:#3e98c7}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text{fill:#fff}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path{stroke:#fff}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail{stroke:transparent}\n"}],"routeData":{"route":"/[slug]","isIndex":true,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/[slug]/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BHUwrqaz.js"}],"styles":[{"type":"external","src":"/_astro/index.BELyaks2.css"},{"type":"inline","content":".slider[data-astro-cid-cwacekji]{overflow:hidden;white-space:nowrap;position:relative;width:100%}.slides[data-astro-cid-cwacekji]{display:flex;gap:30px;animation:slideAnimation 10s linear infinite}.slide[data-astro-cid-cwacekji]{width:25%;flex-shrink:0;transform:translateZ(0);display:inline-block;white-space:normal}@media (min-width: 768px){.slides[data-astro-cid-cwacekji]{gap:0}}@keyframes slideAnimation{0%{transform:translateZ(0)}to{transform:translate3d(-100%,0,0)}}\n.CircularProgressbar{width:100%;vertical-align:middle}.CircularProgressbar .CircularProgressbar-path{stroke:#3e98c7;stroke-linecap:round;transition:stroke-dashoffset .5s ease 0s}.CircularProgressbar .CircularProgressbar-trail{stroke:#d6d6d6;stroke-linecap:round}.CircularProgressbar .CircularProgressbar-text{fill:#3e98c7;font-size:20px;dominant-baseline:middle;text-anchor:middle}.CircularProgressbar .CircularProgressbar-background{fill:#d6d6d6}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background{fill:#3e98c7}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text{fill:#fff}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path{stroke:#fff}.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail{stroke:transparent}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/documentos/GitHub/portafolio-grupo/src/pages/[slug]/index.astro",{"propagation":"none","containsHead":true}],["D:/documentos/GitHub/portafolio-grupo/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CLCdYb4C.mjs","/src/pages/api/projects/get-projects.json.ts":"chunks/pages/get-projects_Drgu2mj7.mjs","\u0000@astrojs-manifest":"manifest_DPd3lrvj.mjs","D:/documentos/GitHub/portafolio-grupo/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CzDtMowh.mjs","\u0000@astro-page:src/pages/api/projects/get-projects.json@_@ts":"chunks/get-projects_Lkft-T7u.mjs","\u0000@astro-page:src/pages/sections/AcercaDe@_@astro":"chunks/AcercaDe_Cg7SGBnJ.mjs","\u0000@astro-page:src/pages/sections/Contacto@_@astro":"chunks/Contacto_CW63LkWo.mjs","\u0000@astro-page:src/pages/sections/Curriculum@_@astro":"chunks/Curriculum_BZQrvZ7T.mjs","\u0000@astro-page:src/pages/sections/Habilidades@_@astro":"chunks/Habilidades_CoJZ7mYx.mjs","\u0000@astro-page:src/pages/sections/Hero@_@astro":"chunks/Hero_DzERw2FG.mjs","\u0000@astro-page:src/pages/sections/Portafolio@_@astro":"chunks/Portafolio_Cotgfrn4.mjs","\u0000@astro-page:src/pages/sections/Servicios@_@astro":"chunks/Servicios_DJVQnHMW.mjs","\u0000@astro-page:src/pages/[slug]/index@_@astro":"chunks/index_DAUdP-s7.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CbJ9zJVh.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BHUwrqaz.js","/astro/hoisted.js?q=3":"_astro/hoisted.9CACt749.js","/astro/hoisted.js?q=0":"_astro/hoisted.BjIgJEjM.js","/astro/hoisted.js?q=2":"_astro/hoisted.B0TMBnsx.js","@/components/shared/Header":"_astro/Header.D7pHJ-4x.js","@/components/shared/SkillsCarousel":"_astro/SkillsCarousel.OIGtqv4n.js","@/components/shared/AnimatedProgressbar":"_astro/AnimatedProgressbar.jxMzYzpD.js","@/components/shared/ModeToggle":"_astro/ModeToggle.xiehCWpp.js","@astrojs/react/client.js":"_astro/client.DURhWcR2.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-latin-ext-400-normal.CIpeJEZw.woff2","/_astro/poppins-latin-300-normal.Dku2WoCh.woff2","/_astro/poppins-latin-200-normal.B8tqA5oA.woff2","/_astro/poppins-latin-600-normal.zEkxB9Mr.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/poppins-latin-800-normal.Bd8-pIP1.woff2","/_astro/poppins-latin-500-normal.C8OXljZJ.woff2","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-latin-300-normal.DCNuMXUj.woff","/_astro/poppins-latin-ext-400-normal.Ce_uWq1Z.woff","/_astro/poppins-latin-800-normal.YoItoZZV.woff","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/poppins-latin-600-normal.BJdTmd5m.woff","/_astro/poppins-latin-200-normal.BxK-3Qw6.woff","/_astro/poppins-latin-500-normal.DGXqpDMm.woff","/_astro/index.BELyaks2.css","/favicon.svg","/_astro/AnimatedProgressbar.jxMzYzpD.js","/_astro/client.DURhWcR2.js","/_astro/clsx.B-dksMZM.js","/_astro/Header.D7pHJ-4x.js","/_astro/hoisted.9CACt749.js","/_astro/hoisted.B0TMBnsx.js","/_astro/hoisted.BHUwrqaz.js","/_astro/hoisted.BjIgJEjM.js","/_astro/index.BvJi-8uu.css","/_astro/index.CSLRt44l.js","/_astro/index.EKmKsbKj.css","/_astro/jsx-runtime.Biu9vCfE.js","/_astro/ModeToggle.xiehCWpp.js","/_astro/pagination.CXYsqrFt.js","/_astro/SkillsCarousel.OIGtqv4n.js","/assets/img/hero-img-1.png","/assets/img/hero-img-2.png","/assets/img/site-logo.svg","/assets/img/user-sidebar-thumb-light.png","/assets/img/user-sidebar-thumb.png","/assets/img/blog/article1.png","/assets/img/blog/article2.png","/assets/img/blog/article3.png","/assets/img/partners/logo1.svg","/assets/img/partners/logo2.svg","/assets/img/partners/logo3.svg","/assets/img/partners/logo4.svg","/assets/img/testimonial/author1.png","/assets/img/testimonial/author2.png","/assets/img/skill/css.svg","/assets/img/skill/figma.svg","/assets/img/skill/html.svg","/assets/img/skill/jquery.svg","/assets/img/skill/js.svg","/assets/img/skill/tailwind.svg","/assets/img/skill/webflow.svg","/assets/img/portfolio/portfolio-img1-1.png","/assets/img/portfolio/portfolio-img1-2.png","/assets/img/portfolio/portfolio-img1-xl.png","/assets/img/portfolio/portfolio-img1.png","/assets/img/portfolio/portfolio-img2.png","/assets/img/portfolio/portfolio-img3.png","/assets/img/portfolio/portfolio-img4.png"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };

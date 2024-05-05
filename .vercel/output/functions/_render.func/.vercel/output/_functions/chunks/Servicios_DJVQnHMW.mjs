export { renderers } from '../renderers.mjs';

const page = () => import('./pages/Servicios_X9_0_but.mjs').then(n => n.S);

export { page };

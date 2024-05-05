export { renderers } from '../renderers.mjs';

const page = () => import('./pages/Contacto_DDMcpfNd.mjs').then(n => n.C);

export { page };

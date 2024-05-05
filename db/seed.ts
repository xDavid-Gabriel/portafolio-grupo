import { db, Projects } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Projects).values([
		{
			title: 'Innovación en diseño industrial',
			slug: 'innovacion-en-disenio-industrial',
			image: 'assets/img/portfolio/portfolio-img1.png',
			type: 'Marca',
			highlight: JSON.stringify(['Innovación']),
			description: 'Descripción del proyecto...'
		}
		// Más proyectos aquí
	])
}

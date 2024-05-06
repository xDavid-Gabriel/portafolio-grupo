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
			description:
				'Descubre cómo la innovación redefine los límites del diseño industrial, fusionando funcionalidad y estética para crear productos revolucionarios que marcan tendencia en el mercado.'
		},
		{
			title: 'Creatividad y arte moderno',
			slug: 'creatividad-y-arte-maderno',
			image: 'assets/img/portfolio/portfolio-img2.png',
			type: 'Marca',
			highlight: JSON.stringify(['arte', 'moderno']),
			description:
				'Sumérgete en el mundo del arte moderno y explora la intersección entre la creatividad ilimitada y las formas contemporáneas de expresión artística que desafían las convenciones tradicionales.'
		},
		{
			title: 'Desarrollo sostenible en arquitectura',
			slug: 'desarrollo-sostenible-en-arquitectura',
			image: 'assets/img/portfolio/portfolio-img3.png',
			type: 'Marca',
			highlight: JSON.stringify(['sostenible']),
			description:
				'Explora cómo la arquitectura sostenible se convierte en el camino hacia un futuro más verde y habitable, donde el diseño innovador se une a la responsabilidad ambiental para crear espacios que armonizan con la naturaleza.'
		},
		{
			title: 'Estrategias de marketing digital',
			slug: 'estrategias-de-marketing-digital',
			image: 'assets/img/portfolio/portfolio-img4.png',
			type: 'Marca',
			highlight: JSON.stringify(['marketing', 'digital']),
			description:
				'Descubre las estrategias más efectivas en el mundo del marketing digital, donde la creatividad se encuentra con la tecnología para impulsar marcas hacia el éxito en un mercado cada vez más digitalizado y competitivo.'
		},
		{
			title: 'Tendencias en tecnología educativa',
			slug: 'tendencias-en-tecnologia-educativa',
			image: 'assets/img/portfolio/portfolio-img4.png',
			type: 'Marca',
			highlight: JSON.stringify(['tecnología', 'educativa']),
			description:
				'Sumérgete en las últimas tendencias en tecnología educativa y descubre cómo la innovación está transformando la forma en que enseñamos y aprendemos, abriendo nuevas posibilidades para la educación del siglo XXI.'
		},
		{
			title: 'Especialización en diseño de interiores',
			slug: 'especializacion-en-disenio-de-interiores',
			image: 'assets/img/portfolio/portfolio-img4.png',
			type: 'Marca',
			highlight: JSON.stringify(['diseño', 'interiores']),
			description:
				'Explora el mundo del diseño de interiores y descubre cómo la especialización en este campo te permite crear espacios únicos que reflejen la personalidad y las necesidades de sus habitantes, fusionando estilo y funcionalidad.'
		},
		{
			title: 'El futuro de la inteligencia artificial',
			slug: 'el-futuro-de-la-inteligencia-artificial',
			image: 'assets/img/portfolio/portfolio-img2.png',
			type: 'Marca',
			highlight: JSON.stringify(['inteligencia', 'artificial']),
			description:
				'Sumérgete en el fascinante mundo de la inteligencia artificial y explora cómo esta tecnología revolucionaria está dando forma al futuro, desde la automatización de tareas hasta la creación de sistemas inteligentes que superan los límites de la imaginación humana.'
		}
		// Más proyectos aquí
	])
}

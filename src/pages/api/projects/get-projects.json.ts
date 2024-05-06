import type { APIRoute } from 'astro'
import { db, Projects } from 'astro:db'

export const GET: APIRoute = async ({ params, request }) => {
	const projects = await db.select().from(Projects)
	const projectsFormated = projects.map((project) => {
		return {
			...project,
			highlight: JSON.parse(project.highlight as string)
		}
	})
	return new Response(JSON.stringify(projectsFormated))
}

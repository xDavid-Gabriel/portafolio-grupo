import { column, defineDb } from 'astro:db'

const Projects = {
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		slug: column.text(),
		image: column.text(),
		type: column.text(),
		highlight: column.json(),
		description: column.text()
	}
}
// https://astro.build/db/config
export default defineDb({
	tables: {
		Projects
	}
})

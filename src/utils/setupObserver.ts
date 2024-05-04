interface ISetupObserverer {
	targetElementId: string
	action: () => void
	options?: {
		threshold: number
	}
}
export function setupObserver({
	targetElementId,
	action,
	options = { threshold: 0.5 }
}: ISetupObserverer) {
	const target = document.getElementById(`${targetElementId}`)
	if (!target) {
		console.error('Target element not found.')
		return
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				action()
				observer.disconnect() // Detener el observador si solo necesitas que se active una vez
			}
		})
	}, options)

	observer.observe(target)
}

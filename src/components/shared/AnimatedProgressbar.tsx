import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
interface Props {
	value: number
	className?: string
	strokeWidth?: number
}
export const AnimatedProgressbar = ({ value, className, strokeWidth = 4 }: Props) => {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		// Solo actualiza el estado si aún no hemos alcanzado el valor deseado.
		if (progress < value) {
			const increment = progress + 1 > value ? 0 : 1 // Asegura que no sobrepasemos el valor.
			const timer = setTimeout(() => {
				setProgress(progress + increment)
			}, 20) // Ajusta la velocidad de la animación aquí

			return () => clearTimeout(timer)
		}
	}, [progress, value]) // Dependencias: progress y value.
	return (
		<CircularProgressbar
			className={`${className} text-black`}
			value={progress}
			text={`${progress}%`}
			styles={buildStyles({
				pathTransition: progress === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s',
				pathColor: '#069c7a',
				textColor: 'currentColor',
				textSize: '1em',
				trailColor: '#999999'
			})}
			strokeWidth={strokeWidth}
		/>
	)
}

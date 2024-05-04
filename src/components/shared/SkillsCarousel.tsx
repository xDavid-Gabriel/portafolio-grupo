// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

import { AnimatedProgressbar } from '@/components/shared/AnimatedProgressbar'
interface Props {
	type: 'habilidades-simple' | 'habilidades'
	skills: {
		id: number
		nombre: string
		porcentaje: number
	}[]
}
export const SkillsCarousel = ({ skills, type }: Props) => {
	if (type === 'habilidades-simple') {
		return (
			<Swiper
				slidesPerView={3}
				breakpoints={{
					400: {
						slidesPerView: 4
					}
				}}
				spaceBetween={20}
			>
				{skills.map((skill) => (
					<SwiperSlide key={skill.id} className="space-y-2 text-center xl:text-ellipsis">
						<AnimatedProgressbar
							value={skill.porcentaje}
							className="h-12 w-12 text-[27px] dark:text-white/50"
						/>
						<p className="text-[13px] font-normal text-black dark:font-light dark:text-white/90">
							{skill.nombre}
						</p>
					</SwiperSlide>
				))}
			</Swiper>
		)
	}

	if (type === 'habilidades') {
		return (
			<>
				<Swiper
					navigation={{
						nextEl: '.button-next',
						prevEl: '.button-prev'
					}}
					pagination={{
						type: 'fraction',
						el: '.swiper-paginations'
					}}
					modules={[Pagination, Navigation]}
					slidesPerView={1}
					breakpoints={{
						400: {
							slidesPerView: 2
						},
						600: {
							slidesPerView: 3
						},
						800: {
							slidesPerView: 4
						}
					}}
					spaceBetween={30}
				>
					{skills.map((skill) => (
						<SwiperSlide key={skill.id}>
							<div className="flex flex-col items-center gap-8">
								<img src="assets/img/skill/figma.svg" className="dark:grayscale" alt="Figma" />

								<AnimatedProgressbar
									value={skill.porcentaje}
									className="h-32 w-32 text-lg font-semibold dark:text-white md:h-40 md:w-40"
									strokeWidth={1}
								/>
								<div className="text-black dark:text-white">{skill.nombre}</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</>
		)
	}
	return <span>Seleccione un tipo por favor</span>
}

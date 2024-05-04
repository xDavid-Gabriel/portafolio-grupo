import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
//Iconos
import { CloseIcon } from '@/icons/close'
import { HomeIcon } from '@/icons/home'
import { AcercaDeIcon } from '@/icons/acerca-de'
import { BriefCaseIcon } from '@/icons/brief-case'
import { GraduationsIcon } from '@/icons/graduations'
import { ResumenIcon } from '@/icons/resumen'
import { TaskIcon } from '@/icons/task'
import { EnvelopeIcon } from '@/icons/envelope'

const navegaciones = [
	{
		id: 1,
		link: 'inicio',
		nombre: 'Inicio',
		icon: <HomeIcon />
	},
	{
		id: 2,
		link: 'acerca-de',
		nombre: 'Acerca de',
		icon: <AcercaDeIcon />
	},
	{
		id: 3,
		link: 'servicios',
		nombre: 'Servicios',
		icon: <BriefCaseIcon />
	},
	{
		id: 4,
		link: 'habilidades',
		nombre: 'Habilidades',
		icon: <GraduationsIcon />
	},
	{
		id: 5,
		link: 'curriculum',
		nombre: 'Currículum',
		icon: <ResumenIcon />
	},
	{
		id: 6,
		link: 'portafolio',
		nombre: 'Portafolio',
		icon: <TaskIcon />
	},
	{
		id: 7,
		link: 'contacto',
		nombre: 'Contacto',
		icon: <EnvelopeIcon />
	}
]
export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeNav, setActiveNav] = useState('inicio')
	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				'inicio',
				'acerca-de',
				'servicios',
				'habilidades',
				'curriculum',
				'portafolio',
				'contacto'
			]
			const scrollY = window.scrollY

			const selectedSection = sections.find((section) => {
				const element = document.getElementById(section)
				if (element) {
					const top = element.offsetTop - 100 // Ajuste de 100px para activar antes de llegar al top exacto
					const height = element.offsetHeight
					return scrollY >= top && scrollY <= top + height
				}
				return false
			})

			if (selectedSection) {
				setActiveNav(selectedSection)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<>
			<header className="mobile-menu-bar fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white/10 p-2 px-3 backdrop-blur-md sm:px-6 xl:hidden">
				<div className="name text-lg font-medium">
					<a className="flex items-center gap-2 text-black dark:text-white" href="/">
						<img src="/assets/img/site-logo.svg" alt="Minfo" />
						<span>Minfo</span>
					</a>
				</div>
				{/* <!-- Mobile Hamburger Menu Start --> */}

				<button
					className="hamburger menu_toggle grid h-12 w-12 place-content-center rounded-full border border-platinum bg-white fill-theme-color dark:border-grey-black dark:bg-night-black dark:fill-white"
					type="button"
					aria-label="Open Mobile Menu"
					onClick={() => setIsMenuOpen(true)}
				>
					<svg viewBox="0 0 20 12" className="w-6" xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M5.33333 11.3333C5.33333 11.1565 5.40357 10.987 5.5286 10.8619C5.65362 10.7369 5.82319 10.6667 6 10.6667H19.3333C19.5101 10.6667 19.6797 10.7369 19.8047 10.8619C19.9298 10.987 20 11.1565 20 11.3333C20 11.5101 19.9298 11.6797 19.8047 11.8047C19.6797 11.9298 19.5101 12 19.3333 12H6C5.82319 12 5.65362 11.9298 5.5286 11.8047C5.40357 11.6797 5.33333 11.5101 5.33333 11.3333ZM2.66667 6C2.66667 5.82319 2.7369 5.65362 2.86193 5.5286C2.98695 5.40357 3.15652 5.33333 3.33333 5.33333H16.6667C16.8435 5.33333 17.013 5.40357 17.1381 5.5286C17.2631 5.65362 17.3333 5.82319 17.3333 6C17.3333 6.17681 17.2631 6.34638 17.1381 6.4714C17.013 6.59643 16.8435 6.66667 16.6667 6.66667H3.33333C3.15652 6.66667 2.98695 6.59643 2.86193 6.4714C2.7369 6.34638 2.66667 6.17681 2.66667 6ZM0 0.666667C0 0.489856 0.0702379 0.320287 0.195262 0.195262C0.320286 0.070238 0.489856 0 0.666667 0H14C14.1768 0 14.3464 0.070238 14.4714 0.195262C14.5964 0.320287 14.6667 0.489856 14.6667 0.666667C14.6667 0.843478 14.5964 1.01305 14.4714 1.13807C14.3464 1.2631 14.1768 1.33333 14 1.33333H0.666667C0.489856 1.33333 0.320286 1.2631 0.195262 1.13807C0.0702379 1.01305 0 0.843478 0 0.666667Z"
						></path>
					</svg>
				</button>
				{/* <!-- Mobile Hamburger Menu End --> */}
			</header>
			{/* <!-- Mobile Menu Sidebar Start --> */}
			<div
				className={clsx(
					'mobile-menu no-scrollbar fixed top-0 z-[999] h-full w-full max-w-[15rem] overflow-y-scroll bg-flash-white px-8 py-12 transition-all duration-300 dark:bg-night-black xl:hidden',
					{
						'-right-full ': !isMenuOpen,
						'right-0': isMenuOpen
					}
				)}
			>
				<button
					className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-grey-black text-xl text-white"
					aria-label="Close Menu"
					onClick={() => setIsMenuOpen(false)}
				>
					<CloseIcon />
				</button>
				<div className="menu-title mb-6 text-lg font-medium text-black dark:text-white">Menu</div>
				<ul className="main-menu space-y-8 font-normal">
					{navegaciones.map((navegacion) => (
						<li
							className={clsx('group relative', {
								active: activeNav === navegacion.link
							})}
							key={navegacion.id}
						>
							<a href={`#${navegacion.link}`} className="group flex items-center space-x-2">
								<span className="w-5 text-black group-[&.active]:text-theme-color dark:text-white">
									{navegacion.icon}
								</span>
								<span className="transition-colors group-hover:text-theme-color group-[&.active]:text-theme-color dark:group-[&.active]:text-white">
									{navegacion.nombre}
								</span>
							</a>
						</li>
					))}
				</ul>
			</div>
			{/* <!-- Mobile Menu Sidebar End --> */}
			{/* Overlay */}
			<div
				className={clsx(
					'fixed left-0 top-0 z-[1] h-full w-full bg-black/60 transition-all duration-200 xl:hidden',
					{
						'invisible opacity-0': !isMenuOpen,
						'visible opacity-100': isMenuOpen
					}
				)}
				onClick={() => setIsMenuOpen(false)}
			></div>

			{/* <!-- Nav/Navigation Start --> */}
			<nav className="sticky top-[50%] z-10 order-3 hidden h-fit translate-y-[-50%] flex-col items-center gap-4 rounded-[2.5rem] border border-platinum bg-snow-white px-2.5 py-4 dark:border-metal-black dark:bg-power-black xl:flex">
				{/* <!-- Site Logo Start --> */}
				<div className="grid h-[3.75rem] w-[3.75rem] place-content-center rounded-full border border-platinum dark:border-metal-black">
					<a href="/">
						<img src="/assets/img/site-logo.svg" alt="Minfo" />
					</a>
				</div>
				{/* <!-- Site Logo Start --> */}
				{/* <!-- Main Menu/Navigation Start --> */}
				<div className="my-4">
					<ul className="space-y-3 text-center">
						{navegaciones.map((navegacion) => (
							<li
								key={navegacion.id}
								className={clsx('group relative', {
									active: activeNav === navegacion.link
								})}
							>
								<a
									href={`#${navegacion.link}`}
									className="grid h-9 w-9 place-content-center rounded-full text-theme-color transition-all duration-300 before:absolute before:right-10 before:w-max before:rounded-md before:bg-white before:px-4 before:py-2 before:text-sm before:font-normal before:opacity-0 before:transition-all before:duration-200 before:content-[attr(data-title)] after:absolute after:right-8 after:top-1/2 after:h-0 after:-translate-y-1/2 after:border-b-4 after:border-l-8 after:border-r-0 after:border-t-4 after:border-solid after:border-b-transparent after:border-l-white after:border-r-transparent after:border-t-transparent after:opacity-0 after:transition-all after:duration-200 after:content-[''] group-hover:bg-white group-hover:before:opacity-100 group-hover:after:opacity-100 group-[&.active]:bg-white dark:before:bg-metal-black dark:before:font-light dark:before:text-white dark:after:border-l-metal-black dark:group-hover:bg-metal-black dark:group-[&.active]:bg-metal-black"
									data-title={navegacion.nombre}
								>
									<span className="text-black group-hover:text-theme-color group-[&.active]:text-theme-color dark:text-white">
										{navegacion.icon}
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
				{/* <!-- Main Menu/Navigation End --> */}
				{/* <!-- Share Button Wrapper Start --> */}
				{/* <div className="relative share group">
          <button
            className="w-10 h-10 text-sm border rounded-full border-platinum dark:border-metalBlack flex-center group-hover:bg-white dark:group-hover:bg-metalBlack text-black dark:text-white"
            aria-label="Share"
          >
            <i className="fal fa-share-alt"></i>
          </button>
          
          <div className="absolute bottom-0 flex items-center invisible px-5 py-6 space-x-3 transition-all duration-300 -translate-y-1/2 opacity-0 social-icons top-1/2 bg-white dark:bg-nightBlack rounded-4xl right-6 group-hover:opacity-100 group-hover:visible group-hover:right-10 -z-1">
            <a
              href="#"
              className="flex transition duration-200 hover:text-theme"
              title="Share with Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="flex transition duration-200 hover:text-theme"
              title="Share with Linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="flex transition duration-200 hover:text-theme"
              title="Share with X"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="flex transition duration-200 hover:text-theme"
              title="Share with X"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
        </div> */}
				{/* <!-- Share Button Wrapper End --> */}
			</nav>
			{/* <!-- Nav/Navigation End --> */}
		</>
	)
}

import Layout, { Content, Footer } from "antd/es/layout/layout";
import Header from "./components/Header";
import neuralLogo from "./assets/logo_neuralsoft.svg";
// import grupoSanCristobalLogo from "./assets/logo_gruposancristobal.svg";
import deepAgroLogo from "./assets/logo_deepagro.png";
import irobotLogo from "./assets/logo_irobot.jpeg";
import Terminal from "./components/Terminal";
import { useState } from "react";
import clsx from "clsx";

type ItemProps = {
	title: string;
	subtitle: string;
	speaker: string;
	type: "activity" | "talk";
	// url: string;
};

const Item = ({ title, subtitle, speaker, type }: ItemProps) => {
	return (
		<div className={clsx("flex items-center gap-4  px-4 py-3 justify-between mb-2 rounded-lg", type === "talk" && "bg-white", type === "activity" && "bg-[#f8f1d9]")}>
			<div className="flex items-center gap-4">
				<div
					className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
					style={{ backgroundImage: "url('src/assets/lambda_transparente.png')" }}
				></div>
				<div className="flex flex-col justify-center">
					<p className="text-[#151711] text-base font-medium leading-normal line-clamp-1">{title} - {speaker}</p>
					<p className="text-[#7a8764] text-sm font-normal leading-normal line-clamp-2">{subtitle}</p>
				</div>
			</div>
			<div className="shrink-0">
				<button
					className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f3f4f0] text-[#151711] text-sm font-medium leading-normal w-fit"
				>
					<span className="truncate">Mas info</span>
				</button>
			</div>
		</div>)
}

const HoverCard = ({ url, title, subtitle, link, fit = false }: { url: string; title?: string; subtitle?: string; link?: string, fit?: bool }) => {
	return (
		<div className="relative overflow-hidden rounded-lg bg-white group w-full h-full">
			<div
				className={clsx("flex w-full bg-no-repeat rounded-xl group-hover:blur-sm h-[250px]", fit ? "bg-contain bg-center" : "bg-cover")}
				style={{ backgroundImage: "url('" + url + "')", backgroundPositionY: fit ? "50%" : "35%" }}
			>
			</div>
			<div className="p-6 absolute inset-0  bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
				<div className="text-center text-black">
					{title && (<h3 className="text-lg font-semibold">{title}</h3>)}
					<br />
					{subtitle && (<h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
						{subtitle}
					</h2>)}
					{link && (
						<>
							<br />
							<a className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal cursor-default">
								{link}
							</a>
						</>
					)}

				</div>
			</div>
		</div>)
}

const App = () => {
	const sponsors = [
		{
			name: "NeuralSoft",
			href: "https://www.neuralsoft.com/",
			logo: neuralLogo,
			description: "NeuralSoft es una empresa de software que brinda soluciones tecnológicas a medida para empresas de distintos rubros. Con más de 20 años de experiencia en el mercado, se especializa en el desarrollo de software a medida, aplicaciones móviles, sistemas de gestión y soluciones de e-commerce.",
		},
		{
			name: "DeepAgro",
			href: "https://www.deepagro.co/",
			logo: deepAgroLogo,
			description: "DeepAgro es una empresa de tecnología agrícola que desarrolla soluciones innovadoras para el sector agropecuario. Con un equipo de profesionales altamente capacitados, DeepAgro trabaja en la creación de tecnologías de vanguardia para mejorar la productividad y la eficiencia en el campo.",
		},
		{
			name: "IRobot",
			href: "https://www.deepagro.co/",
			logo: irobotLogo,
			description: "iRobot es una empresa líder en el desarrollo de robots domésticos y soluciones de limpieza inteligente. Con una amplia gama de productos innovadores, iRobot se destaca por su tecnología de vanguardia y su compromiso con la calidad y la excelencia.",
		},
	];

	const lookingForJobs = [
		{
			name: "CacaSoft",
			href: "https://www.neuralsoft.com/",
			description: "NeuralSoft es una empresa de software que brinda soluciones tecnológicas a medida para empresas de distintos rubros. Con más de 20 años de experiencia en el mercado, se especializa en el desarrollo de software a medida, aplicaciones móviles, sistemas de gestión y soluciones de e-commerce.",
			logo: neuralLogo,
		},
	];

	const getCurrentTab = () => {
		const today = new Date();

		switch (today.toDateString()) {
			case '2024-10-23':
				return 1;
			case '2024-10-24':
				return 2;
			case '2024-10-25':
				return 3;
			default:
				break;
		}

		return 0;
	}

	const [tab, setTab] = useState(getCurrentTab());

	const events = [
		{
			title: "Introducción a la Inteligencia Artificial",
			subtitle: "10:00 AM - 11:30 AM",
			tab: 1,
			description: "Exploraremos los conceptos básicos de la IA y sus aplicaciones en el mundo actual.",
			speakers: "Andrew Ng",
			type: "talk"
		},
		{
			title: "Charla: Programación en Python",
			subtitle: "10:30 AM - 12:00 PM",
			tab: 1,
			description: "Aprende los fundamentos de la programación en Python y cómo aplicarlos en proyectos reales.",
			speakers: "Guido van Rossum",
			type: "talk"
		},
		{
			title: "Partido de fútbol",
			subtitle: "12:00 PM - 2:00 PM",
			tab: 3,
			description: "¡A disfrutar del deporte rey!",
			speakers: "Alan Turing",
			type: "activity"
		},
		{
			title: "Desarrollo de aplicaciones móviles con Flutter",
			subtitle: "2:00 PM - 4:00 PM",
			tab: 1,
			description: "Taller práctico para crear tu primera app móvil con Flutter.",
			speakers: "Tim Sneath",
			type: "talk"
		},
		{
			title: "Charla: Desarrollo Web con React",
			subtitle: "2:00 PM - 3:30 PM",
			tab: 3,
			description: "Descubre cómo desarrollar aplicaciones web modernas utilizando React.",
			speakers: "Dan Abramov",
			type: "talk"
		},
		{
			title: "Charla: Algoritmos y Estructuras de Datos",
			subtitle: "3:00 PM - 4:30 PM",
			tab: 3,
			description: "Una introducción a los algoritmos más importantes y cómo optimizar estructuras de datos.",
			speakers: "Donald Knuth",
			type: "talk"
		},
		{
			title: "Charla: Ciberseguridad Básica",
			subtitle: "4:00 PM - 5:30 PM",
			tab: 0,
			description: "Aprende los principios básicos de ciberseguridad para proteger tus datos.",
			speakers: "Bruce Schneier",
			type: "talk"
		},
		{
			title: "Caminata por el Parque",
			subtitle: "5:00 PM - 6:30 PM",
			tab: 2,
			description: "Disfruta de un paseo relajante por el parque con amigos.",
			speakers: "Grace Hopper",
			type: "activity"
		},
		{
			title: "Fútbol 5",
			subtitle: "6:00 PM - 7:00 PM",
			tab: 0,
			description: "Un partido de fútbol para divertirse y mantenerse en forma.",
			speakers: "Bjarne Stroustrup",
			type: "activity"
		},
		{
			title: "Ciberseguridad: Protege tus datos personales",
			subtitle: "7:00 PM - 8:30 PM",
			tab: 1,
			description: "Aprende a identificar y prevenir las principales amenazas cibernéticas.",
			speakers: "Kevin Mitnick",
			type: "talk"
		},
		{
			title: "Salida al Bar",
			subtitle: "7:00 PM - 9:00 PM",
			tab: 2,
			description: "Una oportunidad para relajarse y socializar después de un día lleno de actividades.",
			speakers: "Margaret Hamilton",
			type: "activity"
		},
		{
			title: "Cena en un nuevo restaurante",
			subtitle: "7:00 PM - 9:00 PM",
			tab: 0,
			description: "Descubrimos juntos la gastronomía local.",
			speakers: "Linus Torvalds",
			type: "activity"
		},
		{
			title: "Jornada de Juegos de Mesa",
			subtitle: "8:00 PM - 10:00 PM",
			tab: 2,
			description: "Una noche divertida jugando a los juegos de mesa más populares.",
			speakers: "Richard Stallman",
			type: "activity"
		},
		{
			title: "Noche de cine",
			subtitle: "8:00 PM - 11:00 PM",
			tab: 0,
			description: "Proyección especial de una película de ciencia ficción.",
			speakers: "Steve Wozniak",
			type: "activity"
		},
		{
			title: "Karaoke",
			subtitle: "10:00 PM - 12:00 AM",
			tab: 0,
			description: "¡Canta tus canciones favoritas y diviértete con amigos!",
			speakers: "Bill Gates",
			type: "activity"
		}
	];

	return (
		<Layout style={{ fontFamily: "Reddit sans" }}>
			<Header />

			<Content>
				<div className="pl-4 pr-4 pb-2 md:pl-24 md:pr-24 md:pt-12 md:pb-2">
					<Terminal />

					<div className="pt-2" id={"Charlas"} >
						<div className="flex border-b border-[#e2e5dc] px-4 justify-between">
							<a onClick={() => setTab(0)} className={clsx("flex flex-col items-center justify-center pb-[13px] pt-4 flex-1", tab === 0 ? "text-[#223611] border-b-[#151711] border-b-[3px]" : "text-[#7a8764]")}>
								<p className="text-center text-sm font-bold leading-normal tracking-[0.015em]">Todos los eventos</p>
							</a>
							<a onClick={() => setTab(1)} className={clsx("flex flex-col items-center justify-center pb-[13px] pt-4 flex-1", tab === 1 ? "text-[#223611] border-b-[#151711] border-b-[3px]" : "text-[#7a8764]")}>
								<p className="text-center text-sm font-bold leading-normal tracking-[0.015em]">Miercoles 23</p>
							</a>
							<a onClick={() => setTab(2)} className={clsx("flex flex-col items-center justify-center pb-[13px] pt-4 flex-1", tab === 2 ? "text-[#151711] border-b-[#151711] border-b-[3px]" : "text-[#7a8764]")}>
								<p className="text-center text-sm font-bold leading-normal tracking-[0.015em]">Jueves 24</p>
							</a>
							<a onClick={() => setTab(3)} className={clsx("flex flex-col items-center justify-center pb-[13px] pt-4 flex-1", tab === 3 ? "text-[#151711] border-b-[#151711] border-b-[3px]" : "text-[#7a8764]")}>
								<p className="text-center text-sm font-bold leading-normal tracking-[0.015em]">Viernes 25</p>
							</a>
						</div>
						<h2 className="text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{tab === 0 ? "Todos los eventos" : "Eventos del dia"}</h2>
						{events.filter((event) => event.tab === tab || tab === 0).map((e) => <Item title={e.title} subtitle={e.subtitle} speaker={e.speakers} type={e.type} />)}
					</div>

					<div className="flex mt-12 flex-col md:flex-row group rounded-xl">
						<div className="flex flex-col gap-2">
							<h1
								className="text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em]"
							>
								Contame un poco mas
							</h1>


							<h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
								Las Jornadas de Ciencias de la Computación son una iniciativa del
								Departamento de Ciencias de la Computación de la Facultad de
								Ciencias Exactas, Ingeniería y Agrimensura de la Universidad
								Nacional de Rosario, de carácter abierto y gratuito. El objetivo
								de las mismas es promover el contacto de los alumnos de la
								Facultad con investigadores y profesionales en temas relacionados
								con el ámbito de las ciencias de la computación. Al mismo tiempo,
								nos permite mantenernos actualizados sobre las tendencias en
								investigación y desarrollo de la región.
							</h2>

							<h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
								Las JCC se llevaron a cabo por primera vez en noviembre del año
								2000. Año tras año han participado decenas de personas
								provenientes de empresas de desarrollo de software local,
								estudiantes e investigadores de esta casa de estudios y de
								universidades destacadas de la zona, entre las cuales podemos
								mencionar a la Universidad Nacional de La Plata, la Universidad de
								Buenos Aires, la Universidad Nacional de Córdoba, la Universidad
								Nacional de Río Cuarto y la Universidad de la República
								(Montevideo-Uruguay). La realización de las JCC es un proceso que
								continúa año a año y constituye un logro significativo del cuerpo
								docente y estudiantil de la carrera Licenciatura en Ciencias de la
								Computación.
							</h2>
						</div>
					</div>
					<h1
						className="text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em] mt-12 pb-3"
					>
						Te puede interesar
					</h1>
					<div className="flex flex-row w-full h-full gap-4 ">
						<HoverCard
							title="Remera JCC XXII"
							subtitle="¡La remera oficial de las jornadas de ciencia de la computacion te está esperando! Con un diseño inspirado en una tematica retro, vas a estar a la moda y demostrando que sos un verdadero crack de la programación. ¡No te la pierdas!"
							url="src/assets/remeras.png"
							link="¡Reserva la tuya haciendo click aca!"
						/>
						<HoverCard
							title="¡Estamos en YouTube y Twitch tambien!"
							subtitle="No te pierdas las charlas y actividades en vivo de las jornadas. ¡Suscribite a nuestro canal y activa las notificaciones para no perderte nada!"
							url="src/assets/yt.jpg"
						/>
						<HoverCard
							title="¡Seguinos en Instagram!"
							subtitle="Contamos con redes oficiales de las jornadas! Vas a encontrar informacion actualizada, novedades y sorteos. ¡No te lo pierdas!"
							url="src/assets/instagram.png"
						/>
					</div>

					<div className="flex flex-col gap-2 mt-12">
						<h1
							className=" text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em]"
						>
							Las JCC 2024 es posible gracias a las contribuciones de nuestros sponsors
						</h1>
						<h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
							Si queres sumarte a esta lista, envianos un email a jcc@fceia.unr.edu.ar
						</h2>
					</div>

					<div className="flex flex-row w-full h-full gap-4 pt-4">
						{sponsors.map((sponsor) => (
							<HoverCard
								title={sponsor.name}
								subtitle={sponsor.description}
								url={sponsor.logo}
								fit
							/>
						))}
					</div>

					<div className="flex mt-12 flex-col md:flex-row justify-center items-center  bg-[#e7dccd] rounded-xl p-6">
						<div className="flex flex-col gap-2 text-center">
							<h1
								className=" text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
							>
								En busqueda laboral
							</h1>
							<h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
								Estas empresas en busqueda de talentos como vos. ¡No te pierdas la oportunidad!
							</h2>
						</div>

						<div className="flex flex-row w-[400px] h-full gap-4 p-8">
							{lookingForJobs.map((sponsor) => (
								<HoverCard
									subtitle={sponsor.description}
									url={sponsor.logo}
									fit
								/>
							))}
						</div>
					</div>
				</div>
			</Content>
			<Footer className="flex flex-row items-center justify-center" id={"Footer"}>
				Facultad de Ciencias Exactas, Ingeniería y Agrimensura. Av. Pellegrini
				250, Rosario, Santa Fe, República Argentina. Teléfono: (+54) 0341-
				4802649
			</Footer>
		</Layout>
	);
};

export default App;

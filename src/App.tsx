import Layout, { Content, Footer } from "antd/es/layout/layout";
import Header from "./components/Header";
import Terminal from "./components/Terminal";
import { useState } from "react";
import clsx from "clsx";
import HoverCard from "./components/HoverCard";
import HoverCardWithModal from "./components/HoverCardWithModal";

import neuralLogo from "./assets/logo_neuralsoft.svg";
import deepAgroLogo from "./assets/logo_deepagro.png";
import irobotLogo from "./assets/logo_irobot.jpeg";
import trailOfBitsLogo from "./assets/logo_trailofbits.svg";

import remeraCard from "./assets/card_remeras.png";
import youtubeCard from "./assets/card_yt.png";
import instagramCard from "./assets/card_ig.png";

import lamiImg from "./assets/lambda_transparente.png";

import Link from "./components/Link";
import CenterTitle from "./components/CenterTitle";
import { act } from "react-dom/test-utils";
import Chip from "./components/Chip";


enum ItemType {
	Activity = "activity",
	Talk = "talk",
}

type ItemProps = {
	title: string;
	subtitle?: string;
	speaker?: string;
	type: ItemType;
};

const Item = ({ title, subtitle, speaker, type }: ItemProps) => {
	return (
		<div className={clsx("flex items-center gap-4  px-4 py-3 justify-between mb-2 rounded-lg", type === "talk" && "bg-white", type === "activity" && "bg-[#f8f1d9]")}>
			<div className="flex items-center gap-4">
				<div
					className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
					style={{ backgroundImage: `url(${lamiImg})` }}
				></div>
				<div className="flex flex-col justify-center">
					<p className="text-[#151711] text-base font-medium leading-normal line-clamp-1">{title} {speaker && "-"} {speaker}</p>
					<p className="text-[#7a8764] text-sm font-normal leading-normal line-clamp-2">{subtitle}</p>
				</div>
			</div>
			{/* <div className="shrink-0">
				<button
					className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f3f4f0] text-[#151711] text-sm font-medium leading-normal w-fit"
				>
					<span className="truncate">Mas info</span>
				</button>
			</div> */}
		</div>
	)
}


const App = () => {
	const [activeYear, setActiveYear] = useState(-1);
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
			href: "",
			logo: irobotLogo,
			description: "iRobot es una empresa líder en el desarrollo de robots domésticos y soluciones de limpieza inteligente. Con una amplia gama de productos innovadores, iRobot se destaca por su tecnología de vanguardia y su compromiso con la calidad y la excelencia.",
		},
		{
			name: "Trail Of Bits",
			href: "https://www.trailofbits.com/",
			logo: trailOfBitsLogo,
			description: "Trail of Bits es una empresa de ciberseguridad que brinda servicios de consultoría, auditoría y desarrollo de software seguro. Con un equipo de expertos en seguridad informática, Trail of Bits trabaja con empresas de todo el mundo para proteger sus sistemas y datos de posibles amenazas.",
		},
	];

	const lookingForJobs = [
		{
			name: "NeuralSoft: Desarrolladores C++ Rosario",
			apply: "https://www.neuralsoft.com/",
			description: (
				<>
					<p>📢 Nos encontramos en la búsqueda de Desarrolladores para nuestra área de Innovación Tecnológica.</p>
					<p> Lugar: Rosario</p>
					<br />
					<p> Imaginate:</p>
					<p> * Desarrollando un lenguaje de programación de última generación, de dominio específico con Inteligencia artificial. No code. <br />
						* Siendo parte de un proyecto de innovación de nivel mundial, <br />
						* Potenciando tu desarrollo con un gran equipo de profesionales del mundo IT.</p>
					<br />

					<p> Requisitos:</p>
					<p> * Estudiantes avanzados o graduados de carreras de Sistemas o Ingenierías.</p>
					<p> * Con conocimiento en programación y procesos del desarrollo de software</p>
					<p> * Que posean conocimiento y experiencia en algunos de estos puntos :</p>
					<p> Java, Javascript y/o Python ; C++ o C# ; Bases de datos SQL.; Desarrollo Mobile (IOS y Android, nativos); Deep Learning.</p>
					<br />

					<p> Modalidad: Presencial.</p>
				</>
			),

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

	const events: {
		title: string;
		subtitle?: string;
		speakers?: string;
		type: ItemType;
		tab: number;
	}[] = [{
		title: "Proximamente",
		tab: 0,
		type: ItemType.Talk
	}]

	return (
		<Layout style={{ fontFamily: "Reddit sans" }}>
			<Header />

			<Content>
				<div className="pl-4 pr-4 pb-2 md:pl-24 md:pr-24 md:pt-12 md:pb-2">
					<Terminal />

					<div className="pt-2" id="Charlas">
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
						{events?.filter((event) => event.tab === tab || tab === 0).map((e) => <Item title={e.title} subtitle={e?.subtitle} speaker={e?.speakers} type={e.type as ItemType} />)}
					</div>

					<div className="flex mt-12 flex-col md:flex-row group rounded-xl" id="MasInfo">
						<div className="flex flex-col gap-2">
							<h1
								className="text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em]"
							>
								Contame un poco mas
							</h1>


							<h2 className="text-base font-normal  @[480px]:text-base @[480px]:font-normal">
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

							<h2 className="text-base font-normal  @[480px]:text-base @[480px]:font-normal">
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
					{/* <Divider /> */}
					<h1
						className="text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em] mt-12 pb-3"
					>
						Te puede interesar
					</h1>
					<div className="flex flex-col md:flex-row w-full h-full gap-4" id="LinksInteresantes">
						<HoverCard
							title="Remera JCC XXII"
							subtitle="¡La remera oficial de las jornadas de ciencia de la computacion te está esperando! Con un diseño inspirado en una tematica retro, vas a estar a la moda y demostrando que sos un verdadero crack de la programación. ¡No te la pierdas!"
							url={remeraCard}
							link="https://forms.gle/AwPkbCfrQbunp9ps7"
						/>
						<HoverCard
							title="¡Estamos en YouTube tambien!"
							subtitle="No te pierdas las charlas y actividades en vivo de las jornadas. ¡Suscribite a nuestro canal y activa las notificaciones para no perderte nada!"
							url={youtubeCard}
							link="https://www.youtube.com/@lcc-fceia-unr531"
						/>
						<HoverCard
							title="¡Seguinos en Instagram!"
							subtitle="Contamos con redes oficiales de las jornadas! Vas a encontrar informacion actualizada, novedades y sorteos. ¡No te lo pierdas!"
							url={instagramCard}
							link="https://www.instagram.com/jccfceia"
						/>
					</div>

					<div className="flex flex-col gap-2 mt-12" id="Sponsors">
						<h1
							className=" text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em]"
						>
							Las JCC XXII es posible gracias a las contribuciones de nuestros sponsors
						</h1>
						<h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
							Si queres sumarte a esta lista, envianos un email a jcc@fceia.unr.edu.ar
						</h2>
					</div>

					<div className="flex flex-col md:flex-row w-full h-full gap-4 pt-4">
						{sponsors.map((sponsor) => (
							<HoverCard
								title={sponsor.name}
								subtitle={sponsor.description}
								url={sponsor.logo}
							/>
						))}
					</div>

					<div className="flex mt-12 flex-col md:flex-row justify-center items-center  bg-[#e7dccd] rounded-xl p-6" id="BusquedaLaboral">
						<div className="flex flex-col gap-2 text-center">
							<h1
								className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
							>
								En busqueda laboral
							</h1>
							<h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
								Estas empresas están en busqueda de talentos como vos. ¡No te pierdas la oportunidad!
							</h2>
						</div>

						<div className="flex flex-row w-[400px] h-full gap-4 p-8">
							{lookingForJobs.map((sponsor) => (
								<HoverCardWithModal
									url={sponsor.logo}
									modalBody={sponsor.description}
									modalTitle={sponsor.name}
									buttonUrl={sponsor.apply}
								/>
							))}
						</div>
					</div>
      <div className="w-full flex-1 flex-col py-5 pt-10 font-bold border-t">
					<CenterTitle className="text-center">Ediciones anteriores</CenterTitle>
					<div class="flex items-center justify-center p-4">
						{Array.from(
							{ length: new Date().getFullYear() - 2005 + 1 },
							(_, i) => 2005 + i
						).map(
							(year) =>
								year !== 2024 && (
									<>
										{/* {year !== 2005 ? " - " : ""} */}
										<span className={"text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1C160C] py-5"  + ( year === activeYear? "font-bold tracking-[0.015em] rounded-full bg-[#223611]" : "")}
                    
                    >
											<Link
												key={year}
												url={`https://jcc.dcc.fceia.unr.edu.ar/${year}`}
                        
											>
												<div
                          className={year === activeYear? "font-bold tracking-[0.015em] rounded-full bg-[#d3c593]" : ""}
													style={{margin: "0 5px"}}
													onClick={() => {
														setActiveYear(year);
													}}
												>
													<Chip {year}/>
												</div>
											</Link>
										</span>
									</>
								)
						)}
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

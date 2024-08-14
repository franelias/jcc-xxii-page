import Layout, { Content, Footer } from "antd/es/layout/layout";
import Header from "./components/Header";
import neuralLogo from "./assets/logo_neuralsoft.svg";
// import grupoSanCristobalLogo from "./assets/logo_gruposancristobal.svg";
import deepAgroLogo from "./assets/logo_deepagro.png";
import Terminal from "./components/Terminal";
import { useState } from "react";
import clsx from "clsx";

type ItemProps = {
	title: string;
	subtitle: string;
};

const Item = ({ title, subtitle }: ItemProps) => {
	return (
		<div className="flex items-center gap-4 bg-white px-4 py-3 justify-between mb-2 rounded-lg">
			<div className="flex items-center gap-4">
				<div
					className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
					style={{ backgroundImage: "url('src/assets/lambda_transparente.png')" }}
				></div>
				<div className="flex flex-col justify-center">
					<p className="text-[#151711] text-base font-medium leading-normal line-clamp-1">{title}</p>
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

const App = () => {
	const sponsors = [
		{
			href: "https://www.neuralsoft.com/",
			logo: neuralLogo,
		},
		{
			href: "https://www.deepagro.co/",
			logo: deepAgroLogo,
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

	return (
		<Layout style={{ fontFamily: "Reddit sans" }}>
			<Header />

			<Content>
				<div className="pl-24 pr-24 pt-12 pb-2">
					<Terminal />
					<div className="pt-2" id={"Charlas"} >
						<div className="flex border-b border-[#e2e5dc] px-4 justify-between">
							<a onClick={() => setTab(0)} className={clsx("flex flex-col items-center justify-center pb-[13px] pt-4 flex-1", tab === 0 ? "text-[#223611] border-b-[#151711] border-b-[3px]" : "text-[#7a8764]")}>
								<p className=" text-sm font-bold leading-normal tracking-[0.015em]">Todos los eventos</p>
							</a>
							<a onClick={() => setTab(1)} className={clsx("flex flex-col items-center justify-center pb-[13px] pt-4 flex-1", tab === 1 ? "text-[#223611] border-b-[#151711] border-b-[3px]" : "text-[#7a8764]")}>
								<p className="text-sm font-bold leading-normal tracking-[0.015em]">Miercoles 23</p>
							</a>
							<a onClick={() => setTab(2)} className={clsx("flex flex-col items-center justify-center pb-[13px] pt-4 flex-1", tab === 2 ? "text-[#151711] border-b-[#151711] border-b-[3px]" : "text-[#7a8764]")}>
								<p className="text-sm font-bold leading-normal tracking-[0.015em]">Jueves 24</p>
							</a>
							<a onClick={() => setTab(3)} className={clsx("flex flex-col items-center justify-center pb-[13px] pt-4 flex-1", tab === 3 ? "text-[#151711] border-b-[#151711] border-b-[3px]" : "text-[#7a8764]")}>
								<p className="text-sm font-bold leading-normal tracking-[0.015em]">Viernes 25</p>
							</a>
						</div>
						<h2 className="text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Today</h2>
						<Item title="Fulbo" subtitle="11:00 AM - 12:00 PM" />
						<Item title="Fulbo" subtitle="11:00 AM - 12:00 PM" />
					</div>
					<div className="flex gap-6 px-4 py-10">
						<div
							className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl "
							style={{ backgroundImage: "url('src/assets/remeras.png')" }}
						></div>
						<div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center items-center">
							<div className="flex flex-col gap-2 text-center">
								<h1
									className="text-[#151711] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
								>
									Limited Edition Cal Week T-shirt
								</h1>
								<h2 className="text-[#151711] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
									Get your hands on our exclusive Cal Week T-shirt. Designed by our talented students, this shirt is a must-have for all Golden Bears.
								</h2>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="flex flex-col md:flex-row max-h-md">
					<div className="w-full md:w-2/3">
						<img className="w-full " src={backgroundPhoto} alt="Logo" />
					</div>
					<div className="md:w-1/3 flex flex-start flex-col items-center justify-center p-8 bg-[#e7dccd]">
						<CenterTitle>Vuelven las JCC!</CenterTitle>
						<Text className="mt-4">
							Las Jornadas de Ciencias de la Computación vuelven los días 23, 24
							y 25 de Octubre. Contaremos con la presencia de destacados
							expositores de distintas localidades argentinas, que están
							radicados en diferentes partes del mundo. Las charlas se
							realizarán en el salón de actos de la Facultad de Ciencias
							Exactas, Ingeniería y Agrimensura, además de actividades y
							talleres abiertos para todos los asistentes. También estaremos
							difundiendo más información en la cuenta de Instagram de las JCC.
						</Text>
					</div>
				</div>

				<div className="flex flex-col justify-center w-full h-full items-center mt-8">
					<CenterTitle>Charlas</CenterTitle>

					<div className="z-10" style={{ position: "absolute" }}>
						<CenterTitle className="text-white">Proximamente</CenterTitle>
					</div>

					<div className="blur-lg flex justify-between mt-8">
						<Card
							className="w-full h-full rounded-sm m-4"
							cover={<img className="w-full" src={cafe} alt="Logo" />}
						></Card>
						<Card
							className="w-full rounded-sm m-4"
							cover={<img className="w-full" src={futbol} alt="Logo" />}
						></Card>
					</div>
				</div>

				<div className=" md:flex-row md:bg-cover md:bg-[url('./assets/who-md.png')]">
					<div className="flex flex-col w-full md:w-1/2 p-8">
						<CenterTitle>Sobre las Jornadas</CenterTitle>
						<Text className="mt-4">
							Las Jornadas de Ciencias de la Computación son una iniciativa del
							Departamento de Ciencias de la Computación de la Facultad de
							Ciencias Exactas, Ingeniería y Agrimensura de la Universidad
							Nacional de Rosario, de carácter abierto y gratuito. El objetivo
							de las mismas es promover el contacto de los alumnos de la
							Facultad con investigadores y profesionales en temas relacionados
							con el ámbito de las ciencias de la computación. Al mismo tiempo,
							nos permite mantenernos actualizados sobre las tendencias en
							investigación y desarrollo de la región.
						</Text>
						<Text className="mt-4">
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
						</Text>
					</div>
				</div> */}

				{/* <div className="md:w-1/3 flex flex-start flex-col items-center justify-center p-8 bg-[#e7dccd]">
            <CenterTitle>Vuelven las JCC!</CenterTitle>
            <Text className="mt-4">
              Las Jornadas de Ciencias de la Computación vuelven los días 4, 5 y 6 de Octubre. Contaremos con la presencia de destacados expositores de distintas localidades argentinas, que están radicados en diferentes partes del mundo. Las charlas se realizarán en el salón de actos de la Facultad de Ciencias Exactas, Ingeniería y Agrimensura, además de actividades y talleres abiertos para todos los asistentes. También estaremos difundiendo más información en la cuenta de Instagram de las JCC.
            </Text>
          </div> */}

				{/* <div className="flex flex-col justify-center w-full h-full items-center mt-8">
			<CenterTitle>Actividades</CenterTitle>

			<div className="z-10" style={{ position: "absolute" }}>
				<CenterTitle className="text-white">Proximamente</CenterTitle>
			</div>

			<div className="blur-lg flex justify-between mt-8">
				<Card
					className="w-full h-full rounded-sm m-4"
					cover={<img className="w-full" src={cafe} alt="Logo" />}
				></Card>
				<Card
					className="w-full rounded-sm m-4"
					cover={<img className="w-full" src={futbol} alt="Logo" />}
				></Card>
			</div>
		</div>

		<div className="flex flex-col justify-center items-center bg-[#e7dccd] mt-8">
			<CenterTitle className="mt-8">Sponsors</CenterTitle>
			<div className="flex flex-row w-full items-center flex-wrap justify-around">
				{sponsors.map((sponsor) => (
					<a
						target="_blank"
						className="w-full md:w-1/3 h-full max-h-[214px] flex items-center justify-center p-8"
						href={sponsor.href}
					>
						<img
							className="object-cover max-h-[150px]"
							src={sponsor.logo}
						/>
					</a>
				))}
			</div>
		</div>

		<div className="flex flex-col justify-center items-center mt-8">
			<CenterTitle>Queres ser sponsor?</CenterTitle>
			<Text className="mt-4"> jcc@fceia.unr.edu.ar</Text>
		</div> */}
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

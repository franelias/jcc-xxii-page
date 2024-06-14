import Layout, { Content, Footer } from "antd/es/layout/layout";
import Header from "./components/Header";
import backgroundPhoto from "./assets/foto.jpg";
import neuralLogo from "./assets/logo_neuralsoft.svg";
// import grupoSanCristobalLogo from "./assets/logo_gruposancristobal.svg";
import deepAgroLogo from "./assets/logo_deepagro.png";
import cafe from "./assets/cafe.jpg";
import futbol from "./assets/futbol.jpeg";
import CenterTitle from "./components/CenterTitle";
import Text from "./components/Text";
import { Card } from "antd";

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
		// {
		// 	href: "https://www.gruposancristobal.com.ar/",
		// 	logo: grupoSanCristobalLogo,
		// },
	];

	return (
		<Layout style={{ fontFamily: "Reddit sans" }}>
			<Header />

			<Content>
				<div className="flex flex-col md:flex-row max-h-md">
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

				{/* bg-[#bfc88d] */}

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
				</div>

				{/* <div className="md:w-1/3 flex flex-start flex-col items-center justify-center p-8 bg-[#e7dccd]">
            <CenterTitle>Vuelven las JCC!</CenterTitle>
            <Text className="mt-4">
              Las Jornadas de Ciencias de la Computación vuelven los días 4, 5 y 6 de Octubre. Contaremos con la presencia de destacados expositores de distintas localidades argentinas, que están radicados en diferentes partes del mundo. Las charlas se realizarán en el salón de actos de la Facultad de Ciencias Exactas, Ingeniería y Agrimensura, además de actividades y talleres abiertos para todos los asistentes. También estaremos difundiendo más información en la cuenta de Instagram de las JCC.
            </Text>
          </div> */}

				<div className="flex flex-col justify-center w-full h-full items-center mt-8">
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
				</div>
			</Content>
			<Footer className="flex flex-row items-center justify-center">
				Facultad de Ciencias Exactas, Ingeniería y Agrimensura. Av. Pellegrini
				250, Rosario, Santa Fe, República Argentina. Teléfono: (+54) 0341-
				4802649
			</Footer>
		</Layout>
	);
};

export default App;

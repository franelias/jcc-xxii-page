import { Tag } from "antd";
import Layout, { Content, Footer } from "antd/es/layout/layout";
import clsx from "clsx";
import { useState } from "react";

import Header from "./components/Header";
import HoverCard from "./components/HoverCard";
import HoverCardWithModal from "./components/HoverCardWithModal";
import Item, { ItemType } from "./components/Item";
import Link from "./components/Link";
import Terminal from "./components/Terminal";

import instagramCard from "./assets/card_ig.png";
import remeraCard from "./assets/card_remeras.png";
import youtubeCard from "./assets/card_yt.png";
import fiestaCard from "./assets/card_fiesta.png";

const App = () => {
  const sponsors = window.sponsors;
  const university = window.university;
  const events = window.schedule;
  const lookingForJobs = window.sponsorsJobSearch || [
    {
      name: "NeuralSoft: Desarrolladores C++ Rosario",
      apply: "https://www.neuralsoft.com/",
      description: (
        <>
          <p>
            📢 Nos encontramos en la búsqueda de Desarrolladores para nuestra
            área de Innovación Tecnológica.
          </p>
          <p> Lugar: Rosario</p>
          <br />
          <p> Imaginate:</p>
          <p>
            {" "}
            * Desarrollando un lenguaje de programación de última generación, de
            dominio específico con Inteligencia artificial. No code. <br />
            * Siendo parte de un proyecto de innovación de nivel mundial, <br />
            * Potenciando tu desarrollo con un gran equipo de profesionales del
            mundo IT.
          </p>
          <br />

          <p> Requisitos:</p>
          <p>
            {" "}
            * Estudiantes avanzados o graduados de carreras de Sistemas o
            Ingenierías.
          </p>
          <p>
            {" "}
            * Con conocimiento en programación y procesos del desarrollo de
            software
          </p>
          <p>
            {" "}
            * Que posean conocimiento y experiencia en algunos de estos puntos :
          </p>
          <p>
            {" "}
            Java, Javascript y/o Python ; C++ o C# ; Bases de datos SQL.;
            Desarrollo Mobile (IOS y Android, nativos); Deep Learning.
          </p>
          <br />

          <p> Modalidad: Presencial.</p>
        </>
      ),
      logo: "logo_neuralsoft.svg",
    },
  ];

  const getCurrentTab = () => {
    const today = new Date();

    switch (today.toDateString()) {
      case "2024-10-23":
        return 1;
      case "2024-10-24":
        return 2;
      case "2024-10-25":
        return 3;
      default:
        break;
    }

    return 0;
  };

  const [tab, setTab] = useState(getCurrentTab());
  const [activeYear, setActiveYear] = useState(-1);

  return (
    <Layout style={{ fontFamily: "Reddit sans" }}>
      <Header />

      <Content>
        <div className="pl-4 pr-4 pb-2 md:pl-24 md:pr-24 md:pt-12 md:pb-2">
          <Terminal />

          <div className="pt-2" id="Charlas">
            <div className="flex border-b border-[#e2e5dc]  justify-between">
              <a
                onClick={() => setTab(0)}
                className={clsx(
                  "flex flex-col items-center justify-center pb-[13px] pt-4 flex-1",
                  tab === 0
                    ? "text-[#223611] border-b-[#151711] border-b-[3px]"
                    : "text-[#7a8764]"
                )}
              >
                <p className="text-center text-sm font-bold leading-normal tracking-[0.015em]">
                  Todos los eventos
                </p>
              </a>
              <a
                onClick={() => setTab(1)}
                className={clsx(
                  "flex flex-col items-center justify-center pb-[13px] pt-4 flex-1",
                  tab === 1
                    ? "text-[#223611] border-b-[#151711] border-b-[3px]"
                    : "text-[#7a8764]"
                )}
              >
                <p className="text-center text-sm font-bold leading-normal tracking-[0.015em]">
                  Miercoles 23
                </p>
              </a>
              <a
                onClick={() => setTab(2)}
                className={clsx(
                  "flex flex-col items-center justify-center pb-[13px] pt-4 flex-1",
                  tab === 2
                    ? "text-[#151711] border-b-[#151711] border-b-[3px]"
                    : "text-[#7a8764]"
                )}
              >
                <p className="text-center text-sm font-bold leading-normal tracking-[0.015em]">
                  Jueves 24
                </p>
              </a>
              <a
                onClick={() => setTab(3)}
                className={clsx(
                  "flex flex-col items-center justify-center pb-[13px] pt-4 flex-1",
                  tab === 3
                    ? "text-[#151711] border-b-[#151711] border-b-[3px]"
                    : "text-[#7a8764]"
                )}
              >
                <p className="text-center text-sm font-bold leading-normal tracking-[0.015em]">
                  Viernes 25
                </p>
              </a>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                {tab === 0 ? "Todos los eventos" : "Eventos del dia"}{" "}
              </h2>
              <p className="md:hidden text-[#151711] text-[14px] leading-tight tracking-[-0.015em] px-4">
                Toca en una charla para ver mas info
              </p>
            </div>

            {events
              ?.filter((event) => event.tab === tab || tab === 0)
              .map((e) => (
                <Item
                  title={e.title}
                  subtitle={e?.subtitle}
                  speaker={e?.speakers}
                  description={e.description}
                  type={e.type as ItemType}
                />
              ))}
          </div>

          <div
            className="flex mt-12 flex-col md:flex-row group rounded-xl"
            id="MasInfo"
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em]">
                Contame un poco mas
              </h1>

              <h2 className="text-base font-normal  @[480px]:text-base @[480px]:font-normal">
                Las Jornadas de Ciencias de la Computación son una iniciativa
                del Departamento de Ciencias de la Computación de la Facultad de
                Ciencias Exactas, Ingeniería y Agrimensura de la Universidad
                Nacional de Rosario, de carácter abierto y gratuito. El objetivo
                de las mismas es promover el contacto de los alumnos de la
                Facultad con investigadores y profesionales en temas
                relacionados con el ámbito de las ciencias de la computación. Al
                mismo tiempo, nos permite mantenernos actualizados sobre las
                tendencias en investigación y desarrollo de la región.
              </h2>

              <h2 className="text-base font-normal  @[480px]:text-base @[480px]:font-normal">
                Las JCC se llevaron a cabo por primera vez en noviembre del año
                2000. Año tras año han participado decenas de personas
                provenientes de empresas de desarrollo de software local,
                estudiantes e investigadores de esta casa de estudios y de
                universidades destacadas de la zona, entre las cuales podemos
                mencionar a la Universidad Nacional de La Plata, la Universidad
                de Buenos Aires, la Universidad Nacional de Córdoba, la
                Universidad Nacional de Río Cuarto y la Universidad de la
                República (Montevideo-Uruguay). La realización de las JCC es un
                proceso que continúa año a año y constituye un logro
                significativo del cuerpo docente y estudiantil de la carrera
                Licenciatura en Ciencias de la Computación.
              </h2>
            </div>
          </div>
          <h1 className="text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em] mt-12 pb-3">
            Te puede interesar
          </h1>
          <div
            className="flex flex-col md:flex-row w-full h-full gap-4"
            id="LinksInteresantes"
          >
            <HoverCard
              title="Remera JCC XXII"
              subtitle={
                <p>
                  ¡La remera oficial de las jornadas de ciencia de la
                  computacion te está esperando! Con un diseño inspirado en una
                  tematica retro, vas a estar a la moda y demostrando que sos un
                  verdadero crack de la programación. ¡No te la pierdas!
                </p>
              }
              url={remeraCard}
              link="https://forms.gle/AwPkbCfrQbunp9ps7"
            />
            <HoverCard
              title="¡Estamos en YouTube tambien!"
              subtitle={
                <p>
                  No te pierdas las charlas y actividades en vivo de las
                  jornadas. ¡Suscribite a nuestro canal y activa las
                  notificaciones para no perderte nada!
                </p>
              }
              url={youtubeCard}
              link="https://www.youtube.com/@lcc-fceia-unr531"
            />
            <HoverCard
              title="¡Seguinos en Instagram!"
              subtitle={
                <p>
                  Contamos con redes oficiales de las jornadas! Vas a encontrar
                  informacion actualizada, novedades y sorteos.
                </p>
              }
              url={instagramCard}
              link="https://www.instagram.com/jccfceia"
            />
            <HoverCard
              title="JodaCC"
              subtitle={
                <p>
                  Se viene la jodaCC, la fiesta de cierre de las jornadas. ¡No
                  te la pierdas!
                </p>
              }
              url={fiestaCard}
              link="https://forms.gle/iYM5aAEE1MUHn97TA"
            />
          </div>

          <div className="flex flex-col gap-2 mt-12" id="Sponsors">
            <h1 className=" text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em]">
              Las JCC XXII es posible gracias a las contribuciones de nuestros
              sponsors
            </h1>
            <h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
              Si queres sumarte a esta lista, envianos un email a
              jcc@fceia.unr.edu.ar
            </h2>
          </div>

          <div className="flex md:flex-wrap flex-col md:flex-row w-full h-full gap-4 mt-4 justify-center">
            {sponsors.map((sponsor) => (
              <div className="md:w-[24%]">
                <HoverCard
                  title={sponsor.name}
                  subtitle={<p>{sponsor.description}</p>}
                  url={sponsor.logo}
                  noDarkmode={true}
                />
              </div>
            ))}
          </div>

          <div
            className="flex mt-12 flex-col md:flex-row justify-center items-center bg-[#e7dccd] rounded-xl p-6"
            id="BusquedaLaboral"
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                En busqueda laboral
              </h1>
              <h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
                Estas empresas están en busqueda de talentos como vos. ¡No te
                pierdas la oportunidad!
              </h2>
            </div>

            <div className="flex flex-row w-full md:w-[400px] h-full gap-4 mt-4 md:pl-8">
              {lookingForJobs.map((sponsor) => (
                <HoverCardWithModal
                  url={sponsor.logo}
                  modalBody={sponsor.description}
                  modalTitle={sponsor.name}
                  buttonUrl={sponsor.apply}
                  noDarkmode={true}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-12" id="Sponsors">
            <h1 className=" text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em]">
              Agradecimientos especiales
            </h1>
          </div>

          <div className="flex flex-col md:flex-row w-full h-full gap-4 mt-4">
            {university.map((university) => (
              <HoverCard
                title={university.name}
                url={university.logo}
                link={university.href}
                noDarkmode={true}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-12">
            <h1 className=" text-[#151711] text-[22px] font-bold leading-tight tracking-[-0.015em]">
              Ediciones anteriores
            </h1>
            <h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
              Explorá las páginas web de años anteriores y sumergite en la rica
              historia de nuestras jornadas. Podés ver las presentaciones,
              actividades y talleres que marcaron cada una de ellas.
            </h2>
          </div>

          <div className="flex items-center justify-center mt-2 flex-wrap">
            {Array.from(
              { length: new Date().getFullYear() - 2005 + 1 },
              (_, i) => 2005 + i
            ).map(
              (year) =>
                year !== 2024 && (
                  <>
                    <Link
                      key={year}
                      url={`https://jcc.dcc.fceia.unr.edu.ar/${year}`}
                    >
                      <Tag
                        onClick={() => setActiveYear(year)}
                        style={{
                          transition: "all 0.3s ease", // Smooth transition for hover and click effects
                        }}
                        onMouseDown={(e) =>
                          (e.currentTarget.style.transform = "scale(0.95)")
                        } // Scale down on click
                        onMouseUp={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        } // Reset scale after click
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        } // Reset scale if mouse leaves during click
                        className={clsx(
                          "py-1 px-3 text-sm rounded-full cursor-pointer md:m-3 m-2",
                          activeYear === year ? "bg-[#d3c593]" : "bg-[#E0E0E0]"
                        )}
                      >
                        {year}
                      </Tag>
                    </Link>
                  </>
                )
            )}
          </div>
        </div>
      </Content>
      <Footer
        className="flex flex-row items-center justify-center"
        id={"Footer"}
      >
        Facultad de Ciencias Exactas, Ingeniería y Agrimensura. Av. Pellegrini
        250, Rosario, Santa Fe, República Argentina. Teléfono: (+54) 0341-
        4802649
      </Footer>
    </Layout>
  );
};

export default App;

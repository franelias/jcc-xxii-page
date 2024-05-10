import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import { Landing } from "./components/Landing";
import {
  BiLogoInstagram,
  BiLogoYoutube,
  BiMailSend,
  BiSolidMap,
  BiSolidPhone,
} from "react-icons/bi";
import classNames from "classnames";
import logo from "./assets/logo-footer.png";
import foto from "./assets/foto.jpg";
import { useIntl } from "react-intl";
import Modal from "antd/es/modal/Modal";
import CenterTitle from "./components/CenterTitle";
import Day from "./components/Day";
import FloatingButton from "./components/FloatingButton";
import FooterInfoRight from "./components/FooterInfoRight";
import Grid3 from "./components/Grid3";
import LeftTitle from "./components/LeftTitle";
import Link from "./components/Link";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";
import NavItem from "./components/NavItem";
import Section from "./components/Section";
import Title from "./components/Title";
import Text from "./components/Text";
import Event from "./components/Event";
import Header from "./components/Header";

function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const cronogramaRef = useRef<HTMLDivElement>(null);
  const actividadesRef = useRef<HTMLDivElement>(null);
  const jobSearchRef = useRef<HTMLDivElement>(null);
  const apoyoRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [modalData, setModalData] = useState<{
    title: string;
    hour: string;
    shortDescription?: string;
    description?: string;
    hrefText?: string;
    hrefUrl?: string;
  }>();
  const [modalDataJob, setModalDataJob] = useState<{
    logo: string;
    jobTitle: string;
    jobDescription: string;
    jobHrefText: string;
    jobHrefUrl: string;
  }>();
  const { formatMessage } = useIntl();

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    pageRef.current?.scroll({
      top: (ref.current?.offsetTop ?? 0) - 64,
      behavior: "smooth",
    });
  };

  // ! Not working. A possible solution is to attach a ref to
  // ! the Landing component and use that to scroll to the top
  const scrollToTop = () => {
    pageRef.current?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const currentPage = pageRef.current;
    if (currentPage) {
      currentPage.addEventListener("scroll", () => {
        if (currentPage.scrollTop > 0 && !showHeader) {
          setShowHeader(true);
        } else if (currentPage.scrollTop === 0 && showHeader) {
          setShowHeader(false);
        }
      });
    }
  }, [showHeader]);

  return (
    <div>
      <Header />
      <div className="max-w-128 h-full bg-black flex flex-row">
        <img className="w-full" src={foto} alt="Logo" />
        <div className="w-full h-full bg-black ">
          asd
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className="w-full h-full relative overflow-hidden">
  //     <div ref={pageRef} className="w-full h-full overflow-y-scroll">
  //       <header
  //         className={classNames(
  //           "fixed w-full top-0 z-30 flex flex-wrap items-center justify-between text-gray-800 bg-white shadow min-h-[4rem] md:justify-start md:text-xl md:gap-7 px-7 py-5 duration-300 ease-in-out",
  //           !showHeader && "-translate-y-full"
  //         )}
  //       >
  //         <Title>
  //           <NavItem scroll={() => scrollToTop()}>JCC 2023</NavItem>
  //         </Title>
  //         <Nav>
  //           <NavItem scroll={() => scrollTo(infoRef)}>Info</NavItem>
  //           <NavItem scroll={() => scrollTo(cronogramaRef)}>Cronograma</NavItem>
  //           <NavItem scroll={() => scrollTo(actividadesRef)}>
  //             Actividades
  //           </NavItem>
  //           <NavItem scroll={() => scrollTo(apoyoRef)}>Apoyo</NavItem>
  //           <NavItem scroll={() => scrollTo(jobSearchRef)}>Búsqueda</NavItem>
  //         </Nav>
  //         <MobileNav showHeader={showHeader}>
  //           <NavItem scroll={() => scrollTo(infoRef)}>Info</NavItem>
  //           <NavItem scroll={() => scrollTo(cronogramaRef)}>Cronograma</NavItem>
  //           <NavItem scroll={() => scrollTo(actividadesRef)}>
  //             Actividades
  //           </NavItem>
  //           <NavItem scroll={() => scrollTo(apoyoRef)}>Apoyo</NavItem>
  //           <NavItem scroll={() => scrollTo(jobSearchRef)}>Búsqueda</NavItem>
  //         </MobileNav>
  //       </header>
  //       <Landing
  //         className="h-full pt-[4rem]"
  //         onAnimationEnds={() => {
  //           if (!showHeader) {
  //             setShowHeader(true);
  //             scrollTo(descRef);
  //           }
  //         }}
  //       />
  //       <main className="flex flex-col max-w-screen-lg gap-5 py-5 m-auto text-center text-gray-800">
  //         <Section ref={descRef}>
  //           <CenterTitle>Jornadas de Ciencias de la Computación</CenterTitle>
  //           <Text>
  //             Las Jornadas de Ciencias de la Computación vuelven los días 4, 5 y
  //             6 de Octubre. Contaremos con la presencia de destacados
  //             expositores de distintas localidades argentinas, que están
  //             radicados en diferentes partes del mundo. Las charlas se
  //             realizarán en el salón de actos de la Facultad de Ciencias
  //             Exactas, Ingeniería y Agrimensura, además de actividades y
  //             talleres abiertos para todos los asistentes. También estaremos
  //             difundiendo más información en la cuenta de Instagram de las JCC.
  //           </Text>
  //           <div className="flex items-center gap-20 text-4xl md:text-6xl">
  //             <span className="transition-colors hover:text-red-500">
  //               <Link url="https://www.youtube.com/channel/UC-CReVEx4-3AfJOH1Tr-udw">
  //                 <BiLogoYoutube />
  //               </Link>
  //             </span>
  //             <span className="transition-colors hover:text-pink-700">
  //               <Link url="https://www.instagram.com/jccfceia">
  //                 <BiLogoInstagram />
  //               </Link>
  //             </span>
  //           </div>
  //         </Section>
  //         <Section ref={infoRef}>
  //           <CenterTitle>Sobre las Jornadas</CenterTitle>
  //           <Text>
  //             Las Jornadas de Ciencias de la Computación son una iniciativa del
  //             Departamento de Ciencias de la Computación de la Facultad de
  //             Ciencias Exactas, Ingeniería y Agrimensura de la Universidad
  //             Nacional de Rosario, de carácter abierto y gratuito. El objetivo
  //             de las mismas es promover el contacto de los alumnos de la
  //             Facultad con investigadores y profesionales en temas relacionados
  //             con el ámbito de las ciencias de la computación. Al mismo tiempo,
  //             nos permite mantenernos actualizados sobre las tendencias en
  //             investigación y desarrollo de la región.
  //           </Text>
  //           <Text>
  //             Las JCC se llevaron a cabo por primera vez en noviembre del año
  //             2000. Año tras año han participado decenas de personas
  //             provenientes de empresas de desarrollo de software local,
  //             estudiantes e investigadores de esta casa de estudios y de
  //             universidades destacadas de la zona, entre las cuales podemos
  //             mencionar a la Universidad Nacional de La Plata, la Universidad de
  //             Buenos Aires, la Universidad Nacional de Córdoba, la Universidad
  //             Nacional de Río Cuarto y la Universidad de la República
  //             (Montevideo-Uruguay). La realización de las JCC es un proceso que
  //             continúa año a año y constituye un logro significativo del cuerpo
  //             docente y estudiantil de la carrera Licenciatura en Ciencias de la
  //             Computación.
  //           </Text>
  //         </Section>
  //         <Section ref={cronogramaRef}>
  //           <LeftTitle>Cronograma</LeftTitle>
  //           <Grid3>
  //             {window.schedule?.map((day) => (
  //               <Day number={day.dayId} date={day.date}>
  //                 {day.talks.map((talk) => (
  //                   <Event
  //                     time={talk.hour}
  //                     title={talk.title}
  //                     speakers={talk.shortDescription}
  //                     onClick={talk.description ? () => setModalData(talk) : undefined}
  //                   />
  //                 ))}
  //               </Day>
  //             ))}
  //           </Grid3>
  //         </Section>
  //         <Section ref={actividadesRef}>
  //           <LeftTitle>Actividades</LeftTitle>
  //           <Grid3>
  //             {window.schedule?.map((day) =>
  //               day.activities ? (
  //                 <Day number={day.dayId} date={day.date}>
  //                   {day.activities?.map((activity) => (
  //                     <Event
  //                       time={activity.hour}
  //                       title={activity.title}
  //                       speakers={activity.shortDescription}
  //                       onClick={activity.description ? () => setModalData(activity) : undefined}
  //                     />
  //                   ))}
  //                 </Day>
  //               ) : undefined
  //             )}
  //           </Grid3>
  //         </Section>
  //         <Section ref={apoyoRef}>
  //           <CenterTitle>Patrocinadores</CenterTitle>
  //           <div className="flex flex-row w-full items-center flex-wrap justify-around">
  //             {window.sponsors.map(sponsor => <a target="_blank" className="w-full md:w-1/3 h-full max-h-[214px] flex items-center justify-center p-8" href={sponsor.href}>
  //               <img className="object-cover max-h-[150px]" src={window.env.baseUrl + sponsor.logo} />
  //             </a>
  //             )}
  //           </div>
  //         </Section>
  //         <Section ref={jobSearchRef}>
  //           <CenterTitle>Búsqueda Laboral</CenterTitle>
  //           <div className="flex flex-row content-center w-full gap-10 items-center justify-around">
  //             {window.sponsorsJobSearch.map(sponsor => <div key={sponsor.jobTitle + sponsor.jobHrefUrl} className="cursor-pointer h-full flex flex-col items-center justify-center" onClick={() => setModalDataJob(sponsor)}>
  //               <img className="object-cover max-h-[150px]" src={window.env.baseUrl + sponsor.logo} />
  //               <h1 className="text-xl font-bold md:text-2xl">{sponsor.jobTitle}</h1>
  //             </div>)}
  //           </div>
  //         </Section>
  //         <Section>
  //           <CenterTitle>Auspiciantes</CenterTitle>
  //           <div className="flex flex-row content-center w-full gap-10 items-center justify-around">
  //             {window.university.map(logo => <a target="_blank" className="h-full flex items-center justify-center" href={logo.href}>
  //               <img className="object-cover max-h-[150px]" src={window.env.baseUrl + logo.logo} />
  //             </a>)}
  //           </div>
  //         </Section>
  //         <Modal footer={null} open={!!modalData} onCancel={() => setModalData(undefined)}>
  //           <div className="w-full h-full flex flex-col justify-center md:p-8 gap-y-2">
  //             <h1 className="font-bold text-2xl text-center">{modalData?.title}</h1>
  //             <h4 className="text-gray-500 text-center">{modalData?.shortDescription}</h4>
  //             <p>{modalData?.description && formatMessage({ id: modalData.title + modalData.hour, defaultMessage: modalData.description }, {
  //               br: <br />,
  //               href: (
  //                 <span className="underline transition-colors cursor-pointer"><Link
  //                   key={modalData.title + modalData.hour}
  //                   url={modalData.hrefUrl}
  //                 >{modalData.hrefText}</Link></span>),
  //             })}</p>
  //           </div>
  //         </Modal>
  //         <Modal footer={null} open={!!modalDataJob} onCancel={() => setModalDataJob(undefined)}>
  //           <div className="w-full h-full flex flex-col justify-center md:p-8 gap-y-2">
  //             <h1 className="font-bold text-2xl text-center">{modalDataJob?.jobTitle}</h1>
  //             <p>{modalDataJob?.jobDescription && formatMessage({ id: modalDataJob.jobTitle + modalDataJob.jobHrefUrl, defaultMessage: modalDataJob.jobDescription }, {
  //               br: <br />,
  //               href: (
  //                 <span className="underline transition-colors cursor-pointer"><Link
  //                   key={modalDataJob.jobTitle + modalDataJob.jobHrefUrl}
  //                   url={modalDataJob.jobHrefUrl}
  //                 >{modalDataJob.jobHrefText}</Link></span>),
  //             })}</p>
  //           </div>
  //         </Modal>
  //       </main>
  //       <footer className="flex flex-col items-center justify-center gap-5 p-5 text-xs text-center text-gray-800 bg-white border-t md:gap-7 md:p-7 md:text-base">
  //         <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row">
  //           <img className="w-32" src={logo} alt="Logo" />
  //           <div className="flex flex-col items-center flex-grow gap-3 md:items-start">
  //             <span>Licenciatura en Ciencias de la Computación</span>
  //             <span>
  //               Facultad de Ciencias Exactas, Ingeniería y Agrimensura
  //             </span>
  //             <span>Universidad Nacional de Rosario</span>
  //           </div>
  //           <div className="flex flex-col items-center gap-3 md:items-end">
  //             <FooterInfoRight Icon={<BiSolidMap />}>
  //               Pellegrini 250, Rosario, Santa Fe, Argentina
  //             </FooterInfoRight>
  //             <FooterInfoRight Icon={<BiSolidPhone />}>
  //               (0341) 480-2649/60
  //             </FooterInfoRight>
  //             <FooterInfoRight Icon={<BiMailSend />}>
  //               jcc@fceia.unr.edu.ar
  //             </FooterInfoRight>
  //           </div>
  //         </div>
  //         <div className="w-full pt-5 font-bold border-t">
  //           Otras ediciones
  //           {Array.from(
  //             { length: new Date().getFullYear() - 2005 + 1 },
  //             (_, i) => 2005 + i
  //           ).map(
  //             (year) =>
  //               year !== 2023 && (
  //                 <>
  //                   {" - "}
  //                   <span className="underline transition-colors cursor-pointer hover:text-red-800">
  //                     <Link
  //                       key={year}
  //                       url={`https://jcc.dcc.fceia.unr.edu.ar/${year}`}
  //                     >
  //                       {year}
  //                     </Link>
  //                   </span>
  //                 </>
  //               )
  //           )}
  //         </div>
  //       </footer>
  //     </div>
  //     <FloatingButton onClick={() => scrollTo(descRef)} show={!showHeader} />
  //   </div>
  // );
}

export default App;

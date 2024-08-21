import { useState, useEffect } from "react";
import React, { PropsWithChildren } from "react";
import "./styles.scss";
import { TerminalProps } from "./types";
// import { parseArgs } from "util";
// import HackerSimulator from "./HackSimulator";
// import YouTube from "./YouTube";

const Typewriter = (
	text: string,
	delay: number,
	func: (s: string) => void,
	Spinner: boolean = false,
	spinTime: number = 5000
) => {
	const startTime = new Date();
	let Output = "";
	let index = 0;
	text = Spinner ? "⠋⠙⠹⠸⠼⠴⠦⠧⠇" : text;

	const intervalId = setInterval(() => {
		document.addEventListener("keydown", function (event) {
			if (event.key === "Enter") {
				return clearInterval(intervalId);
			}
		});

		const endTime = new Date();
		if (index < text.length) {
			Output += text[index];
			index += 1;

			if (Spinner) {
				func(text[index]);
				setTimeout(function () {
					func(text[index + 1]);
				}, 700);
				if (index === 8) {
					if (endTime.getTime() - startTime.getTime() < spinTime) {
						index = 0;
					} else {
						clearInterval(intervalId);
					}
				}
			} else {
				func(Output);
			}
		} else {
			return clearInterval(intervalId);
		}
	}, delay);
};

const Terminal: React.FC<PropsWithChildren<TerminalProps>> = () => {
	const [Text1, setText1] = useState("");
	const [Text2, setText2] = useState("");
	const [Text3, setText3] = useState("");
	const [Text4, setText4] = useState("");
	const Image: string[] = [];

	const cursor = "▮";

	const sections = [
		"Charlas",
		"MasInfo",
		"LinksInteresantes",
		"Sponsors",
		"BusquedaLaboral",
	];

	const files = {
		"secciones.txt": {
			type: "file",
			content: "Charlas MasInfo LinksInteresantes Sponsors BusquedaLaboral",
		},
	};

	const [endIntro, setEndIntro] = useState<boolean>(false);
	const [introEnabled, setIntroEnabled] = useState<boolean>(true);
	const disableMsg = () => { setEndIntro(true); setIntroEnabled(false); };

	useEffect(() => {
		if (!import.meta.env.PROD) {
			disableMsg();
		}
	}, [])

	const generalComms: [string, (arg?: string) => JSX.Element, string][] = [
		[
			"ls",
			() => {
				return (
					<ul>
						{Object.keys(files).map((item) => {
							return <li>{item}</li>;
						})}
					</ul>
				);
			},
			"ls: muestra los archivos disponibles",
		],
		
		[
			"help",
			() => {
				return <>{help()}</>;
			},
			"help: muestra los comandos y links disponibles.",
		],
		[
			"info",
			() => {
				return <>{info()}</>;
			},
			"info: muestra informacion sobre las JCC.",
		],
    [
			"show",
			(arg?: string) => {
				if (!arg) {
					return <>show: falta un argumento</>;
				}

				const index = sections.findIndex(
					(section) => section.toLowerCase() === arg.toLocaleLowerCase()
				);
				if (index === -1)
					return showNotFound(arg);

				const target = document.getElementById(sections[index]);
				console.log(target?.getBoundingClientRect())
				window.scrollTo({ top: target?.getBoundingClientRect().top, behavior: "smooth" });

				return <>Loading...</>;
			},
			"show <section>: te lleva a la sección especificada",
		],
		[
			"man",
			(arg?: string) => {
				if (!arg) {
					return <>man: falta un argumento</>;
				}

				const index = generalComms.findIndex(
					(comm) => comm[0].toLowerCase() === arg.toLowerCase()
				);
				if (index === -1)
					return manNotFound(arg)

				return <li> {generalComms[index][2]}</li>;
			},
			"man <comando>: muestra la descripción de un comando",
		],
		[
			"cat",
			(arg?: string) => {
				if (!arg) {
					return <>cat: falta un argumento</>;
				}

				if (!files[arg])
					return catNotFound(arg)

				return <li> {files[arg].content}</li>;
			},
			"cat <archivo>: imprime el contenido de un archivo al standard output",
		],
	];
	const linkComms: [string, string][] = [
		["Youtube", "https://www.youtube.com/channel/UC-CReVEx4-3AfJOH1Tr-udw"],
		["Instagram", "https://www.instagram.com/jccfceia"],
	];
	const userName = "jcc@dcc.fceia.unr.edu.ar";
	const showNotFound = (arg: string) => { return <> {"show: " + arg + ": seccion no encontrada" + "\n"} </>; };
	const manNotFound = (arg: string) => { return <> {"man: " + arg + ": comando no encontrado" + "\n"} </>; };
	const catNotFound = (arg: string) => { return <> {"cat: " + arg + ": archivo o directorio no encontrado" + "\n"} </>; };
	const help = () => {
		return (
			<>
				<span>
					<span style={{ color: "skyblue" }}>Comandos disponibles:</span>
				</span>
				<>
					<li style={{ color: "#c9c9c9", marginLeft: "20px" }}>General: </li>
					{generalComms.map((item) => {
						return (
							<li style={{marginLeft: "40px"}}>{item[2]}</li>
						);
					})}
				</>
        <br/>
				<>
					<li style={{ color: "#c9c9c9", marginLeft: "20px" }}>Links: (Escribe cualquiera para abrir en una nueva pestaña dicha opcion) </li>
          
          
					{linkComms.map((item) => {
						return (
							<li style={{marginLeft: "40px"}}>{item[0]}</li>
						);
					})}
          

				</>
				<br />
			</>
		);
	};

	const info = () => {
		return (
			<>
				<h1 className=" text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
					Vuelven las JCC!
				</h1>
				<h2 className=" text-base font-normal  @[480px]:text-base @[480px]:font-normal">
					Las Jornadas de Ciencias de la Computación vuelven los días 23, 24
					y 25 de Octubre. Contaremos con la presencia de destacados
					expositores de distintas localidades argentinas, que están
					radicados en diferentes partes del mundo. Las charlas se
					realizarán en el salón de actos de la Facultad de Ciencias
					Exactas, Ingeniería y Agrimensura, además de actividades y
					talleres abiertos para todos los asistentes. También estaremos
					difundiendo más información en la cuenta de Instagram de las JCC.
				</h2>
			</>
		);
	};

	const [prevusedCommand, setprevusedCommand] = useState<[string, JSX.Element][]>([]);

	function SkipIntro() {
		let id = setTimeout(() => { }, 0) as unknown as number;
		while (id--) {
			clearTimeout(id);
		}

		id = setInterval(() => { }, 0) as unknown as number;
		while (id--) {
			clearInterval(id);
		}
		setText1("ssh " + userName);
		setText2(userName + "'s password:");
		setText3("Conectado!");
		setEndIntro(true);
	}

	const parse = (command: string) => {
		const comms = command.split(" ");
		const cid = generalComms.findIndex(
			(comm) => comm[0].toLowerCase() === comms[0].toLowerCase()
		);
		const lid = linkComms.findIndex(
			(comm) => comm[0].toLowerCase() === comms[0].toLowerCase()
		);
		if (lid !== -1) window.open(linkComms[lid][1]);
		else if (cid !== -1) return generalComms[cid][1](comms[1]);
		else return manNotFound(comms[0]);

		return <></>;
	};

	const inputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const key = e.key

		if (key === "Enter") {
			if (!Text3.includes("Access")) {
				let id: number = setTimeout(() => { }, 0) as unknown as number;
				while (id--) {
					clearTimeout(id);
				}

				id = setInterval(() => { }, 0) as unknown as number;
				while (id--) {
					clearInterval(id);
				}
				setText1("ssh " + userName);
				setText2(userName + "'s password:");
				setText3("Conectado!");
			}
			const CommandArea = document.getElementById("command");

			if (CommandArea) {
				const previousCommand: string = (CommandArea as HTMLInputElement).value;
				if (previousCommand !== "") {
					setprevusedCommand(prevusedCommand =>
						[...prevusedCommand, [previousCommand, parse(previousCommand)]]);

				}

				(CommandArea as HTMLInputElement).value = "";
			}

			return;
		}

		if (key === "c") {
			if (e.ctrlKey || e.metaKey) {
				const CommandArea = document.getElementById("command");
				if (CommandArea) {
					const previousCommand: string = (CommandArea as HTMLInputElement).value;
					setprevusedCommand(prevusedCommand =>
						[...prevusedCommand, [`${previousCommand}^C`, <></>]]);

					(CommandArea as HTMLInputElement).value = "";
				}
			}

			return;
		}
	}

	const keyUpHandler = () => {
		const Terminal = document.getElementById("Terminal");
		if (Terminal)
			Terminal.scrollTop = Terminal.scrollHeight;
	}

	useEffect(() => {
    document.addEventListener("keydown", function (event) {
			if (event.key === "Enter") {
				if (!Text3.includes("Access")) {
					let id: number = setTimeout(() => { }, 0) as unknown as number;
					while (id--) {
						clearTimeout(id);
					}

					id = setInterval(() => { }, 0) as unknown as number;
					while (id--) {
						clearInterval(id);
					}
          setText1("ssh " + userName);
          setText2(userName + "'s password:");
          setText3("Conectado!");
          setEndIntro(true);
				}}});

		Typewriter("ssh " + userName, 100, setText1);

		setTimeout(() => {
			setText2(userName + "'s password:▮");
		}, 3000);

		setTimeout(() => {
			Typewriter("", 100, setText4, true, 2500);
		}, 4300);

		setTimeout(() => {
			setText3("Conectandose a " + userName + "...");
		}, 4300);

		setTimeout(() => {
			setText2(userName + "'s password:");
			setText3("> Conectado.");
			setEndIntro(true);
		}, 7300);
	}, []);

	return (
		<div className="terminal rounded-lg hidden md:block h-[500px]" id="Terminal" style={{ overflow: 'scroll' }}>
			<div className="console">
				{Image.map((item) => {
					return <span>{item}</span>;
				})}
				{introEnabled ?
					<>
						<span className="userPrefix">
							user@localhost:~\
							<span style={{ marginLeft: "8px" }} className="fontColor">
								{Text1}
								{Text1.length === userName.length + 4 ? "" : cursor}
							</span>
						</span>

						{endIntro ? (
							<>
								{Text2}
							</>
						) : (
							<span id="skipButton" onClick={SkipIntro} >
								Apreta Enter o clickea aca para saltear
							</span>
						)}

						<span>
							{" "}
							{Text4} <span style={{ color: endIntro ? "yellow" : "" }}>{Text3}</span>
						</span>
						<br />

						{endIntro ?
							<>
								{info()}
								<br />
								<ul>
									<li key={"helpIntro"}>
										<span className="commands">
											<span className="userPrefix">{userName}:~\</span>
											help
										</span>
									</li>
									{help()}</ul>
							</> : ""}

						<br></br>
					</>
					: ""
				}
				<ul className="previousCommands" id="console23">

					{prevusedCommand.length === 0 ? (
						<></>
					) : (
						prevusedCommand.map((item, index) => {
							return (
								<>
									<li key={index}>
										<span className="commands">
											<span className="userPrefix">{userName}:~\</span>
											{item[0]}
										</span>
									</li>
									{item[1]}
								</>
							);
						})
					)}
					{/* {console.log(prevusedCommand, prevusedCommand.length)} */}
				</ul>
				{endIntro ? (
					<span className="commands">
						<span className="userPrefix">{userName}:~\</span>{" "}
						<input type="text" id="command" name="command" onKeyDown={inputHandler} onKeyUp={keyUpHandler}></input>
					</span>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Terminal;

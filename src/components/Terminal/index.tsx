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
		"FutbolLCC",
		"NocheDeJuegos",
		"Fiesta",
		"Footer",
	];
	const [endIntro, setEndIntro] = useState<boolean>(false);
	const [introEnabled, setIntroEnabled] = useState<boolean>(true);
	const disableMsg = () => { setEndIntro(false); setIntroEnabled(false); };

	const generalComms: [string, (arg?: string) => JSX.Element, string][] = [
		[
			"ls",
			() => {
				return (
					<ul>
						{sections.map((item) => {
							return <li>{item}</li>;
						})}
					</ul>
				);
			},
			"ls: List all available sections",
		],
		[
			"show",
			(arg?: string) => {
				if (arg) {
					const index = sections.findIndex(
						(section) => section.toLowerCase() === arg.toLocaleLowerCase()
					);
					if (index === -1)
						return notFound(arg);
					else {
						const target = document.getElementById(sections[index]);
						target?.scrollIntoView({ behavior: "smooth" });
						return <>Loading...</>;
					}
				}
				return <></>;
			},
			"show <section>: show a specific section",
		],
		[
			"help",
			() => {
				return <>{help()}</>;
			},
			"help: Show available commands and links. The laters will be opened in a new tab",
		],
		[
			"man",
			(arg?: string) => {
				if (arg) {
					const index = generalComms.findIndex(
						(comm) => comm[0].toLowerCase() === arg.toLowerCase()
					);
					if (index === -1)
						return notFound(arg)
					else return <li> {generalComms[index][2]}</li>;
				}
				return <></>;
			},
			"man <command>: show the manual for a specific command",
		],
	];
	const linkComms: [string, string][] = [
		["Youtube", "https://www.youtube.com/channel/UC-CReVEx4-3AfJOH1Tr-udw"],
		["Instagram", "https://www.instagram.com/jccfceia"],
		["etc.", ""],
	];
	const userName = "jcc@dcc.fceia.unr.edu.ar";
	const notFound = (arg: string) => { return <> {"bash: " + arg + ": command not found" + "\n"} </>; };
	const help = () => {
		return (
			<>
				<span>
					<span style={{ color: "skyblue" }}>Comandos disponibles:</span>
				</span>
				<li>
					<span style={{ color: "#c9c9c9" }}>General: </span>
					{generalComms.map((item, index) => {
						return (
							<span>
								{index !== generalComms.length - 1 ? item[0] + ", " : item[0]}
							</span>
						);
					})}
				</li>
				<li>
					<span style={{ color: "#c9c9c9" }}>Links: </span>
					{linkComms.map((item, index) => {
						return (
							<>{index !== linkComms.length - 1 ? item[0] + ", " : item[0]}</>
						);
					})}
				</li>
				<br />
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
		setText3("Logged In!");
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
		else return notFound(comms[0]);

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
				setText3("Logged In!");
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
		}

	}

	const keyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			const Terminal = document.getElementById("Terminal");
			if (Terminal && Terminal.scrollHeight > Terminal.offsetHeight)
				if (introEnabled)
					disableMsg();
			// else
			// 	setprevusedCommand(prevusedCommand => [...prevusedCommand.slice(1)]);
		}
	}

	useEffect(() => {
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
							<span id="skipButton" onClick={SkipIntro}>
								Press Enter or Click Here to Skip
							</span>
						)}

						<span>
							{" "}
							{Text4} <span style={{ color: endIntro ? "yellow" : "" }}>{Text3}</span>
						</span>
						<br />

						{endIntro ?
							<>

								<ul>{help()}</ul>

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
				{/* {console.log(intro)} */}
				{Text3.includes("Access") ? (
					<span className="commands">
						<span className="userPrefix">{userName}:~\</span>{" "}
						<input type="text" id="command" name="command" autoFocus onKeyDown={inputHandler} onKeyUp={keyUpHandler}></input>
					</span>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Terminal;

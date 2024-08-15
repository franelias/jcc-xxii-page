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
	const [commMessage, setCommMessage] = useState<string>("");
  const [helpEnable, setHelpEnable] = useState<boolean>(false);

	const generalComms: [string, (arg?: string) => void][] = [
		[
			"ls",
			() => {
				setMessage(sections.join("\n"));
			},
		],
		[
			"show",
			(arg?: string) => {
				if (arg) {
					const index = sections.findIndex((section) => section.toLowerCase() === arg.toLocaleLowerCase());
					if (index === -1) setMessage("bash: " + arg + ": section not found" + "\n");
          else {
						setMessage("Loading...");
						const target = document.getElementById(sections[index]);
						target?.scrollIntoView({ behavior: "smooth" });
					} 
				}
			},
		],
		["help", () => {setHelpEnable(true); setCommMessage("");}],
	];
	const linkComms: [string, string][] = [
		["Youtube", "https://www.youtube.com/channel/UC-CReVEx4-3AfJOH1Tr-udw"],
		["Instagram", "https://www.instagram.com/jccfceia"],
		["etc.", ""],
	];
	const userName = "jcc@dcc.fceia.unr.edu.ar";

	const [prevusedCommand, setprevusedCommand] = useState<string[]>([]);

	function SkipIntro() {
		let id = setTimeout(() => {}, 0) as unknown as number;
		while (id--) {
			clearTimeout(id);
		}

		id = setInterval(() => {}, 0) as unknown as number;
		while (id--) {
			clearInterval(id);
		}
		setText1("ssh " + userName);
		setText3("Access Granted!");
    setHelpEnable(true);
	}
	
  const setMessage = ( msg: string) => { setCommMessage(msg); setHelpEnable(false); };

	const parse = (command: string) => {
		const comms = command.split(" ");
		const cid = generalComms.findIndex((comm) => comm[0].toLowerCase() === comms[0].toLowerCase());
		const lid = linkComms.findIndex((comm) => comm[0].toLowerCase() === comms[0].toLowerCase());
		if (lid !== -1) window.open(linkComms[lid][1]);
		else if (cid !== -1) generalComms[cid][1](comms[1]);
		else setMessage("bash: " + comms[0] + ": command not found" + "\n");
	};

	useEffect(() => {
		document.addEventListener("keydown", function (event) {
			if (event.key === "Enter") {
				if (!Text3.includes("Access")) {
					let id: number = setTimeout(() => {}, 0) as unknown as number;
					while (id--) {
						clearTimeout(id);
					}

					id = setInterval(() => {}, 0) as unknown as number;
					while (id--) {
						clearInterval(id);
					}
					setText1("ssh " + userName);
					setText2(userName + "'s password:");
					setText3("Access Granted!");
				}
				const CommandArea = document.getElementById("command");
				if (CommandArea) {
					const previousCommand: string = (CommandArea as HTMLInputElement).value;
					if (previousCommand !== "") {
						setprevusedCommand((prevArray) => [...prevArray, previousCommand]);
						parse(previousCommand);
					}

					(CommandArea as HTMLInputElement).value = "";
				}
			}
		});

		Typewriter("ssh " + userName, 100, setText1);

		setTimeout(() => {
			setText2(userName + "'s password:▮");
		}, 3000);

		setTimeout(() => {
			Typewriter("", 100, setText4, true, 2500);
		}, 4300);

		setTimeout(() => {
			setText3("Connecting to " + userName + "...");
		}, 4300);

		setTimeout(() => {
			setText2(userName + "'s password:");
			setText3("> Access granted.");
		}, 7300);
	}, []);

	return (
		<div className="terminal rounded-lg hidden md:block">
			<div className="console">
				{Image.map((item) => {
					return <span>{item}</span>;
				})}

				<span className="userPrefix">
					user@localhost:~\
					<span style={{ marginLeft: "8px" }} className="fontColor">
						{Text1}
						{Text1.length === userName.length + 4 ? "" : cursor}
					</span>
				</span>

				{Text3.includes("Access") ? (
					""
				) : (
					<span id="skipButton" onClick={SkipIntro}>
						Press Enter or Click Here to Skip
					</span>
				)}
				{Text2}
				<span>
					{" "}
					{Text4}{" "}
					<span style={{ color: Text3.includes("Access") ? "yellow" : "" }}>
						{Text3}
					</span>
				</span>
				<br />

				
				{helpEnable? (
          <>
					<span>
						<span style={{ color: "skyblue" }}>Available Commands:</span>
					</span>
          <span>
						<span style={{ color: "#c9c9c9" }}>General: </span>
						{generalComms.map((item, index) => {
							return (
								<span>
									{index !== generalComms.length - 1 ? item[0] + ", " : item[0]}
								</span>
							);
						})}
					</span>
          	<span>
						<span style={{ color: "#c9c9c9" }}>Links: </span>
						{linkComms.map((item, index) => {
							return (
								<>{index !== linkComms.length - 1 ? item[0] + ", " : item[0]}</>
							);
						})}
					</span>
          <br/>
          </>
				) : (
					""
				)}
				
	

				
				{Text3.includes("Access") ? (
					<span>Thank you for visiting!◝(ᵔᵕᵔ)◜</span>
				) : (
					""
				)}
				<br></br>
				<ul className="previousCommands" id="console23">
					{commMessage !== "" ? (
						<div key={"commRes"}>{commMessage}</div>
					) : (
						<></>
					)}

					{/* {
						prevusedCommand.length === 0 ? (
							<></>
						) : prevusedCommand[prevusedCommand.length - 1] === "comm1" ? (
							<>aaaa</>
						) : (
						)
						// prevusedCommand.map((item, index) => {
						// 	return (
						// <div>
						// 	<li key={index}>{item}</li>
						// 	bash: {item.replace(userName + ":~\\", "")}: command not found
						// </div>
						// 	);
						// })
					} */}
					{/* {console.log(prevusedCommand)} */}
				</ul>
				{Text3.includes("Access") ? (
					<span className="commands">
						<span className="userPrefix">{userName}:~\</span>{" "}
						<input type="text" id="command" name="command" autoFocus></input>
					</span>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Terminal;

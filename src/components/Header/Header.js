import Link from "next/link";
import React from "react";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillInstagram,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
	Container,
	Span,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a
					style={{
						display: "flex",
						alignItems: "center",
						color: "white",
						marginBottom: "20px",
					}}
				>
					<DiCssdeck size="3rem" /> <Span>Portfolio</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons
				href="https://www.github.com/jamesisaacs2"
				target="_blank"
			>
				<AiFillGithub size="2.5rem" />
			</SocialIcons>
			<SocialIcons
				href="https://www.linkedin.com/in/james-isaacs2"
				target="_blank"
			>
				<AiFillLinkedin size="2.5rem" />
			</SocialIcons>
			<SocialIcons
				href="https://www.instagram.com/jamesjackgrit"
				target="_blank"
			>
				<AiFillInstagram size="2.5rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;

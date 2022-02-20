import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				My Portfolio
			</SectionTitle>
			<SectionText>
				Words that say important things and keep saying important things
				as long as people will keep reading
			</SectionText>
			<Button>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;

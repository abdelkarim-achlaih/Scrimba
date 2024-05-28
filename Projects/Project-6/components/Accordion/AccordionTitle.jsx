import React from "react";
import Toggle from "../Toggle/index";

export default function AccordionTitle({ children }) {
	return (
		<Toggle.Button>
			<Toggle.On>
				<h1 className="accordion-button active">{children}</h1>
			</Toggle.On>
			<Toggle.Off>
				<h1 className="accordion-button">{children}</h1>
			</Toggle.Off>
		</Toggle.Button>
	);
}

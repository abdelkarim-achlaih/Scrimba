import React from "react";
import Toggle from "../Toggle/index";

export default function AccordionSection({ children, onOpen }) {
	return (
		<Toggle onToggle={onOpen}>
			<div className="accordion-section">{children}</div>
		</Toggle>
	);
}

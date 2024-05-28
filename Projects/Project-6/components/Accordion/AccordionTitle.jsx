import React from "react";
import { AccordionContext } from "./AccordionSection";

export default function AccordionTitle({ children }) {
	const { open, toggleOpen } = React.useContext(AccordionContext);
	return (
		<h1
			onClick={toggleOpen}
			className={`accordion-button${open ? " active" : ""}`}
		>
			{children}
		</h1>
	);
}

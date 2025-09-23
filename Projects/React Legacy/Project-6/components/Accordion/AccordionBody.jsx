import React from "react";
import { AccordionContext } from "./AccordionSection";

export default function AccordionBody({ children }) {
	const { open } = React.useContext(AccordionContext);
	return <div className={`panel${open ? " on" : ""}`}>{children}</div>;
}

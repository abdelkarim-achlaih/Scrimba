import React from "react";
import useToggle from "../../hooks/useToggle";

const AccordionContext = React.createContext();
export { AccordionContext };

export default function AccordionSection({ children, onOpen }) {
	const [open, toggleOpen] = useToggle({
		initialValue: false,
		onToggle: onOpen,
	});
	return (
		<AccordionContext.Provider value={{ open, toggleOpen }}>
			<div className="accordion-section">{children}</div>
		</AccordionContext.Provider>
	);
}

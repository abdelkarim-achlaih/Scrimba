import React from "react";
import Toggle from "../Toggle/index";

export default function AccordionBody({ children }) {
	return (
		<>
			<Toggle.On>
				<div className="panel on">
					<p>{children}</p>
				</div>
			</Toggle.On>
			<Toggle.Off>
				<div className="panel">
					<p>{children}</p>
				</div>
			</Toggle.Off>
		</>
	);
}

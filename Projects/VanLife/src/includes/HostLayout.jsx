import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
	const activeStyles = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};
	return (
		<>
			<nav className="host-nav">
				<NavLink
					style={({ isActive }) => (isActive ? activeStyles : null)}
					to="/host"
					end
				>
					Dashboard
				</NavLink>
				<NavLink
					style={({ isActive }) => (isActive ? activeStyles : null)}
					to="/host/income"
				>
					Income
				</NavLink>
				<NavLink
					style={({ isActive }) => (isActive ? activeStyles : null)}
					to="/host/reviews"
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}

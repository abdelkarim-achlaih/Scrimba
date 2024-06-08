import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/src/assets/images/avatar-icon.png";

export default function Header() {
	return (
		<header>
			<NavLink className="site-logo" to="." end>
				#VanLife
			</NavLink>
			<nav>
				<NavLink
					className={({ isActive }) => (isActive ? "active-link" : null)}
					to="host"
				>
					Host
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "active-link" : null)}
					to="about"
				>
					About
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "active-link" : null)}
					to="vans"
				>
					Vans
				</NavLink>
				<Link to="login" className="login-link">
					<img src={imageUrl} className="login-icon" />
				</Link>
			</nav>
		</header>
	);
}

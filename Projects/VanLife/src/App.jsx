import React from "react";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Layout from "./includes/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login, {
	loader as formLoader,
	action as formAction,
} from "./pages/Login";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./includes/HostLayout";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
	loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Error from "./includes/Error";
import { requireAuth } from "../utils";

import "../server";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route
				path="vans"
				element={<Vans />}
				errorElement={<Error />}
				loader={vansLoader}
			/>
			<Route
				path="login"
				element={<Login />}
				loader={formLoader}
				action={formAction}
			/>
			<Route
				path="vans/:id"
				element={<VanDetail />}
				errorElement={<Error />}
				loader={vanDetailLoader}
			/>
			<Route path="host" element={<HostLayout />}>
				<Route
					index
					element={<Dashboard />}
					loader={async ({ request }) => await requireAuth(request)}
				/>
				<Route
					path="income"
					element={<Income />}
					loader={async ({ request }) => await requireAuth(request)}
				/>
				<Route
					path="reviews"
					element={<Reviews />}
					loader={async ({ request }) => await requireAuth(request)}
				/>
				<Route
					path="vans"
					element={<HostVans />}
					errorElement={<Error />}
					loader={hostVansLoader}
				/>
				<Route
					path="vans/:id"
					element={<HostVanDetail />}
					errorElement={<Error />}
					loader={hostVanDetailLoader}
				>
					<Route
						index
						element={<HostVanInfo />}
						loader={async ({ request }) => await requireAuth(request)}
					/>
					<Route
						path="pricing"
						element={<HostVanPricing />}
						loader={async ({ request }) => await requireAuth(request)}
					/>
					<Route
						path="photos"
						element={<HostVanPhotos />}
						loader={async ({ request }) => await requireAuth(request)}
					/>
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import PartnerWithUs from "../Pages/PartnerWithUs/PartnerWithUs";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/partner-with-us',
				element: <PartnerWithUs />
			}
		]

	},
]);

export default router;
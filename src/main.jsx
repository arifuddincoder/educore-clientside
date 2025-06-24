import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AuthProvider from "./contexts/auth/AuthProvider";
import { router } from "./routes/MainRoutes";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
			<Toaster position="top-right" />
		</AuthProvider>
	</StrictMode>
);

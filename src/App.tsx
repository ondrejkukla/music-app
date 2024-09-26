import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Callback from "./components/Callback";
import Homepage from "./components/Homepage";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

const App: React.FC = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		const token = localStorage.getItem("access_token");
		if (token) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					{isAuthenticated ? (
						<>
							<Route
								path="/"
								element={
									<Homepage
										setIsAuthenticated={setIsAuthenticated}
									/>
								}
							/>
							<Route
								path="/callback"
								element={<Navigate to="/" />}
							/>
						</>
					) : (
						<>
							<Route path="/" element={<LoginPage />} />
							<Route
								path="/callback"
								element={
									<Callback
										setIsAuthenticated={setIsAuthenticated}
									/>
								}
							/>
						</>
					)}
					{/* Fallback route for undefined paths */}
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
};

export default App;

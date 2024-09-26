// MUI config

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark", // Use dark mode for the background
		primary: {
			main: "#3c3abe", // Links or primary actions
		},
		secondary: {
			main: "#c4c4c4", // Background color for components (e.g., cards)
		},
		background: {
			default: "#2d2e37", // Main background color of the app
			paper: "#fcfcff", // Background for elements like fields, modals, etc.
		},
		text: {
			primary: "#ffffff", // Text on components
			secondary: "#000000", // Alternate text color (for contrast)
		},
	},
	typography: {
		fontFamily: "Rubik, sans-serif", // Font set to Rubik
		h1: {
			fontWeight: 700, // Bold
			fontSize: "2.5rem", // Adjust size as needed
		},
		h2: {
			fontWeight: 500,
			fontSize: "2rem",
		},
		body1: {
			fontWeight: 400,
			fontSize: "1rem",
		},
	},
});

export default theme;

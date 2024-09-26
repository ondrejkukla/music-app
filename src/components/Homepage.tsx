import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { logout } from "../services/auth";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Player from "./Player";

interface HomepageProps {
	setIsAuthenticated: (value: boolean) => void;
}

const drawerWidth: number = 80;

const Homepage: React.FC<HomepageProps> = ({ setIsAuthenticated }) => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [activeWindow, setActiveWindow] = useState<string>("Home");

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying); // Toggle between play and pause
	};

	const handleNext = () => {
		console.log("Next track");
		// Logic for skipping to the next track
	};

	const handlePrevious = () => {
		console.log("Previous track");
		// Logic for going back to the previous track
	};

	const handleLogout = () => {
		logout();
		setIsAuthenticated(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Sidebar
				drawerWidth={drawerWidth}
				setActiveWindow={setActiveWindow}
			/>
			<TopBar
				drawerWidth={drawerWidth}
				handleLogout={handleLogout}
				activeWindow={activeWindow}
			/>
			<Player
				drawerWidth={drawerWidth}
				isPlaying={isPlaying}
				handlePlayPause={handlePlayPause}
				handleNext={handleNext}
				handlePrevious={handlePrevious}
				activeWindow={activeWindow}
			/>
		</Box>
	);
};

export default Homepage;

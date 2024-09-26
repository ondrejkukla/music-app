import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import Controls from "./Controls"; // Make sure to import your Controls component

interface PlayerProps {
	drawerWidth: number;
	isPlaying: boolean;
	handlePlayPause: () => void;
	handleNext: () => void;
	handlePrevious: () => void;
	activeWindow: string;
}

const Player: React.FC<PlayerProps> = ({
	drawerWidth,
	isPlaying,
	handlePlayPause,
	handleNext,
	handlePrevious,
	activeWindow
}) => {
	return (
		<Box
			component="main"
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "end",
				flexGrow: 1,
				width: `calc(100vw - ${drawerWidth}px)`,
				height: "100vh",
				backgroundColor: "#ffffff",
				padding: "48px",
			}}
		>
			<Toolbar />
			<Typography variant="h4" color="#000000">
				{activeWindow}
			</Typography>

			{/* Add Player Controls here */}
			<Controls
				isPlaying={isPlaying}
				onPlayPause={handlePlayPause}
				onNext={handleNext}
				onPrevious={handlePrevious}
			/>
		</Box>
	);
};

export default Player;

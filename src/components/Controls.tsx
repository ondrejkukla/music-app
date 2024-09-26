import React from "react";
import { Box, IconButton } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";

interface PlayerControlsProps {
	isPlaying: boolean;
	onPlayPause: () => void;
	onNext: () => void;
	onPrevious: () => void;
}

const Controls: React.FC<PlayerControlsProps> = ({
	isPlaying,
	onPlayPause,
	onNext,
	onPrevious,
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				height: "64px",
				alignItems: "center",
				gap: 2,
				backgroundColor: "#000000",
				borderRadius: "16px",
				opacity: "0.5",
			}}
		>
			{/* Previous Button */}
			<IconButton onClick={onPrevious}>
				<SkipPreviousRoundedIcon sx={{ fontSize: 40 }} />
			</IconButton>

			{/* Play/Pause Button */}
			<IconButton onClick={onPlayPause}>
				{isPlaying ? (
					<PauseRoundedIcon sx={{ fontSize: 50 }} />
				) : (
					<PlayArrowRoundedIcon sx={{ fontSize: 50 }} />
				)}
			</IconButton>

			{/* Next Button */}
			<IconButton onClick={onNext}>
				<SkipNextRoundedIcon sx={{ fontSize: 40 }} />
			</IconButton>
		</Box>
	);
};

export default Controls;

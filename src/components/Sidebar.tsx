import React, { useState } from "react";
import { Box, Button, Drawer, Toolbar } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

interface SidebarProps {
	drawerWidth: number;
	setActiveWindow: (value: string) => void;
}

const sidebarItems = [
	{
		id: 1,
		icon: <HomeOutlinedIcon sx={{ width: "32px", height: "32px" }} />,
		activeIcon: <HomeIcon sx={{ width: "32px", height: "32px" }} />,
		label: "Home",
	},
	{
		id: 2,
		icon: <PlayCircleOutlinedIcon sx={{ width: "32px", height: "32px" }} />,
		activeIcon: <PlayCircleIcon sx={{ width: "32px", height: "32px" }} />,
		label: "Player",
	},
	{
		id: 3,
		icon: (
			<FavoriteBorderOutlinedIcon
				sx={{ width: "32px", height: "32px" }}
			/>
		),
		activeIcon: <FavoriteIcon sx={{ width: "32px", height: "32px" }} />,
		label: "Favorites",
	},
	{
		id: 4,
		icon: (
			<LibraryMusicOutlinedIcon sx={{ width: "32px", height: "32px" }} />
		),
		activeIcon: <LibraryMusicIcon sx={{ width: "32px", height: "32px" }} />,
		label: "Library",
	},
];

const Sidebar: React.FC<SidebarProps> = ({ drawerWidth, setActiveWindow }) => {
	const [activeItem, setActiveItem] = useState<number>(1);

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: {
					width: drawerWidth,
					boxSizing: "border-box",
					backgroundColor: "background.default",
				},
			}}
		>
			<Toolbar />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "24px",
					overflow: "auto",
					pt: "48px",
					pb: "48px",
				}}
			>
				{sidebarItems.map((item) => (
					<Button
						key={item.id}
						onClick={() => {
							setActiveItem(item.id);
							setActiveWindow(item.label);
						}}
						variant="contained"
						sx={{
							padding: "0px",
							width: "32px",
							height: "40px",
							borderRadius: "32px",
							backgroundColor: "transparent",
							"&:hover": {
								backgroundColor: "#3c3abe", // Set hover color
							},
						}}
					>
						{activeItem === item.id ? item.activeIcon : item.icon}
					</Button>
				))}
			</Box>
		</Drawer>
	);
};

export default Sidebar;

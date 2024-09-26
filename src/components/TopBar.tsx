import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ButtonComponent from "./ButtonComponent";
import Search from "./Search"; // Import the SearchBar component

interface TopBarProps {
	drawerWidth: number;
	handleLogout: () => void;
	activeWindow: string;
}

const TopBar: React.FC<TopBarProps> = ({ drawerWidth, handleLogout, activeWindow }) => {
	return (
		<AppBar
			position="fixed"
			sx={{
				width: `calc(100% - ${drawerWidth}px)`,
				ml: `${drawerWidth}px`,
				backgroundColor: "background.default",
			}}
		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<Typography variant="h4" noWrap component="div" minWidth="15%">
					{activeWindow}
				</Typography>
				<Search />
				<ButtonComponent
					label="Logout"
					onClick={handleLogout}
				></ButtonComponent>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;

import React from "react";
import { Button } from "@mui/material";

interface ButtonComponentProps {
	label: string;
	onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({label, onClick}) => {
	return (
		<Button
			onClick={onClick}
			variant="contained"
			color="primary"
			sx={{
				borderRadius: 6, // Rounded corners
				padding: "10px 20px", // Padding inside the button
				textTransform: "none", // Disable uppercase text
				fontSize: "1rem", // Adjust font size
			}}
		>
			{label}
		</Button>
	);
};

export default ButtonComponent;

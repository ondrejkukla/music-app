import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ButtonComponent from "./ButtonComponent";
import { login } from "../services/auth";

const LoginPage: React.FC = () => {
	return (
		<Container
			maxWidth={false} // Prevent responsive width, full width
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "flex-start",
				minHeight: "100vh", // Full height
				minWidth: "100vw",
				backgroundColor: "background.default", // Use theme background color
				overflow: "hidden",
			}}
		>
			<Box
				height="95vh"
				width="50vw"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				bgcolor="background.paper"
				borderRadius="48px"
				padding={0}
				margin={0}
				boxShadow={10}
			>
				<ButtonComponent label="Log in" onClick={login} />
				<Typography
					variant="body1"
					color="text.secondary"
					marginTop={6}
				>
					If you do not have a Spotify account you can use this:
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					textAlign="center"
					marginTop={2}
					sx={{ fontStyle: "italic" }}
				>
					user: login.app.music@gmail.com <br />
					password: password.app.music
				</Typography>
			</Box>
			<Typography variant="h1" color="text.primary" margin="0px auto">
				Please log in with Spotify
			</Typography>
		</Container>
	);
};

export default LoginPage;

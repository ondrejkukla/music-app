import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessTokenFromUrl } from "../services/auth";
import { SCOPES } from "../services/auth";

interface CallbackProps {
	setIsAuthenticated: (value: boolean) => void;
}

const Callback: React.FC<CallbackProps> = ({ setIsAuthenticated }) => {
	const navigate = useNavigate();

	useEffect(() => {
		console.log("Callback, Full URL:", window.location.href);
		const expiresIn = new URLSearchParams(
			window.location.hash.substring(1)
		).get("expires_in");
		let token: string | null = getAccessTokenFromUrl();

		if (token && expiresIn) {
			localStorage.setItem("access_token", token); // Store token in localStorage
			localStorage.setItem("scopes_token", SCOPES);
			const expireTime = Date.now() + Number(expiresIn) * 1000;
			localStorage.setItem("expire_token", expireTime.toString());
			setIsAuthenticated(true);
			navigate("/");
		} else {
			throw new Error("No access token found");
		}
	}, [setIsAuthenticated]);

	return <div>Loading...</div>;
};

export default Callback;

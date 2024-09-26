import React, { useEffect, useState } from "react";
import { getProfile } from "../services/spotifyApi";
import { isTokenExpired } from "../services/auth";

const Profiles: React.FC = () => {
	const [profile, setProfile] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let accessToken: string | null = localStorage.getItem("access_token");

		const getSpotifyProfile = async (accessToken: string | null) => {
			console.log(
				"Profiles token - ",
				localStorage.getItem("access_token")
			);
			if (!accessToken || isTokenExpired()) {
				setError("Token is missing or expired. Please log in again.");
				return;
			}
			try {
				const data = await getProfile(accessToken);
				setProfile(data);
			} catch (err) {
				if (err instanceof Error) {
					console.error("Error:", err.message);
				} else {
					console.error("Unknown error:", err);
				}
			} finally {
				setLoading(false);
			}
		};

		console.log("Profiles scopes - ", localStorage.getItem("scopes_token"));
		getSpotifyProfile(accessToken);
	}, []);

	if (loading) return <p>Profiles - Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<h2 style={{ color: "black" }}>User Profile</h2>
			{profile && (
				<p style={{ color: "black" }}>{profile.display_name}</p>
			)}
		</div>
	);
};

export default Profiles;

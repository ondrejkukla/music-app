import React, { useState } from "react";
import { getSearchData } from "../services/spotifyApi";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchResults from "./SearchResults";

interface SearchResult {
	id: string;
	name: string;
	type: "track" | "album" | "artist";
	popularity: number;
}

const Search: React.FC = () => {
	const [query, setQuery] = useState<string>("");
	const [results, setResults] = useState<SearchResult[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
		null
	);
	const [placeholder, setPlaceholder] = useState<string>("Search");
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const getQueryData = async () => {
		if (!query) {
			setPlaceholder("Fill the input field");
			return;
		}
		setError(null);

		try {
			const accessToken: string | null =
				localStorage.getItem("access_token");
			if (!accessToken) {
				throw new Error("Access denied");
			}
			const data = await getSearchData(accessToken, query);
			const tracks: SearchResult[] = data.tracks?.items || [];
			const artists: SearchResult[] = data.artists?.items || [];
			const albums: SearchResult[] = data.albums?.items || [];
			setResults(
				[...tracks, ...artists, ...albums]
					.sort((a, b) => b.popularity - a.popularity)
					.slice(0, 5)
			);
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(`Error fetching search data: ${err.message}`);
			} else {
				setError("An unknown error occurred");
			}
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value); // Update the query state
		if (typingTimeout) clearTimeout(typingTimeout);
		const timeout = setTimeout(() => {
			if (e.target.value) getQueryData();
		}, 500);

		setTypingTimeout(timeout);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			getQueryData();
		}
	};

	return (
		<Box sx={{ width: "100%", maxWidth: 400, margin: "0 auto" }}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "8px",
					maxHeight: "48px",
				}}
			>
				<TextField
					variant="outlined"
					placeholder={placeholder}
					value={query}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					autoComplete="off"
					sx={{
						display: "flex",
						justifyContent: "center",
						height: "48px",
						flexGrow: 1,
						borderRadius: "32px",
						backgroundColor: "background.default",
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "transparent",
							},
							"&:hover fieldset": {
								borderColor: "transparent",
							},
							"&.Mui-focused fieldset": {
								borderColor: "transparent",
							},
						},
					}}
				/>
				<Button
					onClick={getQueryData}
					variant="contained"
					sx={{
						padding: "0px",
						width: "48px",
						height: "48px",
						borderRadius: "32px",
					}}
				>
					<SearchRoundedIcon
						sx={{
							width: "32px",
							height: "32px",
						}}
					/>
				</Button>
				{results.length > 0 && isFocused && (
					<SearchResults results={results} />
				)}
			</Box>

			{error && (
				<Typography variant="body2" color="error">
					{error}
				</Typography>
			)}
		</Box>
	);
};

export default Search;

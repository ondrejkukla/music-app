import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

interface SearchResult {
	id: string;
	name: string;
	type: "track" | "album" | "artist";
}

interface SearchResultsProps {
	results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
	const [selectedItem, setSelectedItem] = useState<SearchResult>();

	const handleSelect = (item: SearchResult) => {
		// Handle playing or displaying more details about the selected item
		console.log("Selected:", item);
		setSelectedItem(item); // Store the selected item in state if needed
	};

	return (
		results.length > 0 && (
			<Box
				sx={{
					position: "absolute",
					top: "100%", // Align right below the search bar
					width: "325px", // Take the width of the search bar
					color: "black",
					zIndex: 10,
					backgroundColor: "#f0f0f0",
					padding: "16px",
					borderRadius: "0px 0px 16px 16px",
					boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
				}}
			>
				{results.map((result) => (
					<Typography
						key={result.id}
						variant="body1"
						onClick={() => handleSelect(result)} // Call handleSelect with the clicked result
						sx={{
							cursor: "pointer",
							"&:hover": { backgroundColor: "#e0e0e0" },
						}}
					>
						{result.name} ({result.type})
					</Typography>
				))}
			</Box>
		)
	);
};

export default SearchResults;

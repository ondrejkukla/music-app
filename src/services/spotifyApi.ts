export const BASE_URL = "https://api.spotify.com/v1";

export const getProfile = async (
	accessToken: string | null,
	endpoint: string | null = null
) => {
	const realEndpoint = endpoint ? endpoint : "me";
	const response = await fetch(`https://api.spotify.com/v1/${realEndpoint}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	if (!response.ok) {
		throw new Error(`Error: ${response.status} ${response.statusText}`);
	}

	const data = await response.json();
	return data;
};

export const getSearchData = async (
	accessToken: string | null,
	query: string
) => {
	const response = await fetch(
		`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track,album,artist`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);

	if (!response.ok) {
		throw new Error(`Error: ${response.status} ${response.statusText}`);
	}

	const data = await response.json();
	return data;
};

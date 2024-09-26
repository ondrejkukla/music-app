export interface SpotifyApiResponse {
	display_name?: string;
	followers?: { total: number };
	images?: { url: string }[];
	email?: string;
	tracks?: { items: Track[] }; // 'tracks' might be undefined if you search for artists/albums instead
	// error handling
	status?: number;
	statusText?: string;
	url?: string;
	error?: any;
}

export interface Track {
	id: string;
	name: string;
	artists: { name: string }[];
	album: { name: string }[];
}

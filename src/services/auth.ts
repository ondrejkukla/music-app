const CLIENT_ID: string = "cd31f1e68b64426f8fc8b898c04f1ca2";
const REDIRECT_URI: string | undefined = "http://localhost:5173/callback";
export const SCOPES: string =
	"user-read-private user-read-email user-library-read";
let url: string = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + encodeURIComponent(CLIENT_ID);
url += "&scope=" + encodeURIComponent(SCOPES);
url += "&redirect_uri=" + encodeURIComponent(REDIRECT_URI);
url += "&show_dialog=true";

const AUTH_URL: string = url;
console.log("Auth, URL - ", AUTH_URL);

export const login = (): void => {
	window.location.href = AUTH_URL;
};

export const logout = () => {
	localStorage.removeItem("spotifyAccessToken");
	localStorage.removeItem("spotifyAccessExpiry");
};

export const getAccessTokenFromUrl = (): string | null => {
	const hash = window.location.hash;
	/* console.log("Auth, hash -", hash); */
	let token: string | null = null;
	if (hash) {
		token = new URLSearchParams(hash.substring(1)).get("access_token");
	}
	return token;
};

export const isTokenExpired = () => {
	const expireToken = localStorage.getItem("expire_token");
	if (!expireToken) return true;
};

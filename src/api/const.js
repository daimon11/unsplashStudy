export const API_URL_AUTH = 'https://unsplash.com/oauth/authorize?';
export const REQUEST_TOKEN = 'https://unsplash.com/oauth/token';
export const ACCESS_KEY = '3ciXuZCG29nCOavK_8i01rbgtyzEof7B1CkINzjUfFY';
export const REDIRECT_URI = 'http://localhost:3000';
export const RESPONSE_TYPE = 'code';
export const SCOPE = 'public read_user read_photos write_likes';
export const CLIENT_SECRET = 'bFpNjpYI6esD9vqirqOfjO2uqMdt-1yOAFSHGlybzQE';
export const CLIENT_ID = 555449;

const searchParams = new URLSearchParams('');

searchParams.append('client_id', ACCESS_KEY);
searchParams.append('redirect_uri', REDIRECT_URI);
searchParams.append('response_type', RESPONSE_TYPE);
searchParams.append('scope', SCOPE);

export const urlAuth = `${API_URL_AUTH}${searchParams.toString()}`;


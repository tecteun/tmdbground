

let API_KEY = "PASTE_API_KEY_HERE"

export const getMovies = async (queryString, page) => {
	const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${page}&query=${queryString}&append_to_response=videos&include_adult=false`);
	const data = (res.ok ? res : Promise.reject(res));
	return await data.json();
}

export const getTopMovies = async (page = 0) => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&append_to_response=videos`);
	const data = (res.ok ? res : Promise.reject(res));
	return await data.json();
}

export const getMovieDetails = async id => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);
	const data = (res.ok ? res : Promise.reject(res));
	return await data.json();
}
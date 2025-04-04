import axios from "axios";

const api = axios.create({
    baseURL: "https://www.omdbapi.com/"
});

export const getMovie = () => {
    return api.get(`?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=harry+potter&page=1`);
}
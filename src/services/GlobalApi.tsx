import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const getGenreList = () => axiosInstance.get('/genres/anime');

export const getAllAnimes = () => axiosInstance.get('/seasons/now')
import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const client = axios.create({
  baseURL: "https://api.rawg.io/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllGames = async () => {
   try {
        const response = await client?.get('/games',{
            params: {
                key: API_KEY,
                page_size: 50
            }
        });
        return response?.data?.results;
   } catch (error) {
        console.log(error);
        return null;
   }
}

const getGameBySlug = async (slug) => {
   try {
        const response = await client?.get(`/games/${slug}`,{
            params: {
                key: API_KEY,
            }
        });
        return response?.data;
   } catch (error) {
        console.log(error);
        return null;
   }
}

const getGameScreenshotsBySlug = async (id) => {
   try {
        const response = await client?.get(`/games/${id}/screenshots`,{
            params: {
                key: API_KEY,
            }
        });
        return response?.results;
   } catch (error) {
        console.log(error);
        return null;
   }
}

export {
    getAllGames,
    getGameBySlug,
    getGameScreenshotsBySlug
    
}
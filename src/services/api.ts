import axios from "axios";
import { FetchImagesFunction } from "./api.types";

const API_KEY = "KUV4twdTRl_cGZNGrPRpKulwP2hUJB8b7db6y9eqOuY";
const BASE_URL = "https://api.unsplash.com";

const fetchImages: FetchImagesFunction = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default fetchImages;

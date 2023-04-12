import { getSearchedGifs, getGifById } from "../data/api-calls.js";

export const loadSingleGif = async (id) => {
  try {
    const gif = await getGifById(id);
    return gif.data;
  } catch (err) {
    return err.message;
  }
};

export const loadSearchedGifs = async (searchTerm = "") => {
  try {
    const resultGifs = await getSearchedGifs(searchTerm);
    return resultGifs;
  } catch (err) {
    return err.message;
  }
};

import { GIPHY_KEY, DOMAIN } from "../common/constants.js";

export const getTrendingGifs = async () => {
  try {
    const url = `${DOMAIN}trending?api_key=${GIPHY_KEY}&limit=50&rating=g`;
    const gifs = await fetch(url);
    const result = await gifs.json();
    return result.data;
  } catch (err) {
    return err.message;
  }
};

export const getSearchedGifs = async (title) => {
  try {
    const url = `${DOMAIN}search?api_key=${GIPHY_KEY}&q=${title}&offset=0&rating=g&lang=en`;
    const gifs = await fetch(url);
    const result = await gifs.json();
    return result.data;
  } catch (err) {
    return err.message;
  }
};

export const getGifById = async (gifId) => {
  const url = `${DOMAIN}${gifId}?api_key=${GIPHY_KEY}`;
  try {
    const gif = await fetch(url);
    const result = await gif.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};



export const uploadGif = async (е) => {
  const file = document.getElementById("gif-file").files[0];
  const formData = new FormData();
  formData.append("file", file);
  try {
      const response = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${GIPHY_KEY}`, {
          method: "POST",
          body: formData,
        });
        
      const result = await response.json();
      console.log(result+'upload successful');
  } catch (err) {
      console.error(err);
  }
};
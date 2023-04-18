import {
  GIPHY_KEY,
  DOMAIN,
  successMSG,
  notLoadedMSG,
  NUM_GIFS_TO_LOAD
} from "../common/constants.js";
import { addUploaded } from "./upload.js";
import { q } from "../events/helpers.js";
import { toSimpleView } from "../views/simple-view.js";
import { loader } from "../events/helpers.js";

export let offset = 0;
/**
Fetches trending GIFs from the Giphy API and appends them to the DOM.
@async
@function
@returns {Promise<string | void>} A promise that resolves to a string with an error message, or void.
*/
export const getTrendingGifs = async () => {
  try {
    const loader = document.querySelector('.loader');
    
    loader?.classList?.add('show');
    console.log(offset, '=offset ')

    const url = `${DOMAIN}trending?api_key=${GIPHY_KEY}&limit=${NUM_GIFS_TO_LOAD}&offset=${offset}&rating=g`;
  
    const gifs = await fetch(url);
    const result = await gifs.json();
    offset += NUM_GIFS_TO_LOAD;
    loader?.classList?.remove('show');

    const gifWrapper = q('#gif-wrapper');

    const htmlGifs = result.data.map((gif) => toSimpleView(gif)).join('\n');
    const tempElement = document.createElement('div');
  
    tempElement.innerHTML = htmlGifs;
    gifWrapper.append(tempElement);

  } catch (err) {
    loader?.classList?.remove('show')
    return err.message
  }
}
/**
Fetches searched gifs from Giphy API based on the given title
@async
@param {string} title - The title to search for
@returns {Promise<Array>} An array of gifs data
*/
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
/**
Fetches a single gif from Giphy API based on the given gifId
@async
@param {string} gifId - The ID of the gif to fetch
@returns {Promise<Object>} A single gif data
*/
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
/**
Get an array of gifs based on their ids
@param {Array} favIds - An array of strings representing the ids of the favorite gifs
@returns {Promise} A Promise object that resolves with an array of objects representing the favorite gifs
@throws {Error} An error if the request fails
*/
export const getGifsByIds = async (favIds) => {
  const id = favIds.join("%2C");
  const url = `https://api.giphy.com/v1/gifs?api_key=${GIPHY_KEY}&ids=${id}`;
  try {
    const gif = await fetch(url);
    const result = await gif.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
/**
Uploads a gif file to Giphy using the Giphy API key and FormData.
@async
@param {Event} e - The event object representing the file upload.
@returns {Promise} - A Promise that resolves with the GIF ID of the uploaded file or rejects with an error message.
*/
export const uploadGif = async (е) => {
  const file = document.getElementById("gif-file").files[0];

  if (!file) {
    q("#msg").innerHTML = notLoadedMSG;
    return;
  }
  q("#msg").innerHTML = loader();
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await fetch(
      `https://upload.giphy.com/v1/gifs?api_key=${GIPHY_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    const gifId = result.data.id;
    addUploaded(gifId);
    q("#msg").innerHTML = successMSG;
    q("#gif-file").value = "";

    // console.log(result.data.id + ' upload successful');
  } catch (err) {
    console.error(err);
    q("#msg").innerHTML = notLoadedMSG;
  }
};
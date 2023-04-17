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

let offset = 0;
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
    const gifWraper = q('#gif-wrapper');

    const htmlGifs = result.data.map((gif) => toSimpleView(gif)).join('\n');
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlGifs;
    gifWraper.append(tempElement);
  } catch (err) {
    loader?.classList?.remove('show')
    return err.message
  }
}

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

export const uploadGif = async (е) => {
  const file = document.getElementById("gif-file").files[0];

  if (!file) {
    q("#msg").innerHTML = notLoadedMSG;
    return;
  }

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
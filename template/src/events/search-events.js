import { CONTAINER_SELECTOR } from "../common/constants.js";

import { toSearchView } from "../views/search-view.js";

import { q } from "./helpers.js";

export const renderSearchItems = async (searchTerm) => {
  q(CONTAINER_SELECTOR).innerHTML = await toSearchView(searchTerm);
};

//debounce for search
//HOF func
const debounce = (fn, delay) => {
  let timer;

  //returning anonymous func that storing timer access using clousure
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export let updateInput = (text) => {
  // console.log(text);
  renderSearchItems(text);
}

updateInput = debounce(updateInput, 500);
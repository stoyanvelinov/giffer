import { CONTAINER_SELECTOR } from "../common/constants.js";

import { toSearchView } from "../views/search-view.js";

import { q } from "./helpers.js";

export const renderSearchItems = async (searchTerm) => {
  q(CONTAINER_SELECTOR).innerHTML = await toSearchView(searchTerm);
};

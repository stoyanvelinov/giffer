let favorites = JSON.parse(localStorage.getItem("favGifs")) || [];

export const addFavorite = (gifId) => {
  if (favorites.find((id) => id === gifId)) {
    return;
  }

  favorites.push(gifId);
  localStorage.setItem("favGifs", JSON.stringify(favorites));
};

export const removeFavorite = (gifId) => {
  favorites = favorites.filter((id) => id !== gifId);
  localStorage.setItem("favGifs", JSON.stringify(favorites));
};
/**
Gets the list of favorites GIF ids from localStorage.
@returns {Array<string>} The array of favorites GIF ids.
*/
export const getFavorites = () => [...favorites];

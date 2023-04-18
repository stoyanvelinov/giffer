let uploaded = JSON.parse(localStorage.getItem("uploaded")) || [];

export const addUploaded = (gifId) => {
  if (uploaded.find((id) => id === gifId)) {
    return;
  }

  uploaded.push(gifId);
  localStorage.setItem("uploaded", JSON.stringify(uploaded));
};
/**
Gets the list of uploaded GIF ids from localStorage.
@returns {Array<string>} The array of uploaded GIF ids.
*/
export const getUploaded = () => [...uploaded];

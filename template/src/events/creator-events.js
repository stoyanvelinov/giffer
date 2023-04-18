import { q } from "./helpers.js";
/**
Shows or hides the input container based on the value of the selected option.
*/
export function showVideosButton(){
    const select = document.getElementById('GIFSource');
    const inputContainer = document.getElementById('input-container');
    const input = document.getElementById('input');
    inputContainer.style.display = "none";

    select.addEventListener('change', () => {
      if (select.value === 'video' || select.value === 'images') {
        inputContainer.style.display = 'block';
      } else {
        inputContainer.style.display = 'none';
      }
    });
}

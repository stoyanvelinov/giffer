// // scroll-events.js

// import { getTrendingGifs } from "../data/api-calls.js";
// import { toSimpleView } from "../views/simple-view.js";

// let isLoading = false;

// const loadMoreGifs = async () => {
//   if (isLoading) return;
//   isLoading = true;

//   const gifContainer = document.querySelector("#gif-container");
//   const gifWrapper = document.querySelector("#gif-wrapper");

//   try {
//     const gifs = await getTrendingGifs();

//     if (gifs.length === 0) {
//       window.removeEventListener("scroll", handleScroll);
//       return;
//     }

//     gifs.forEach((gif) => {
//       const div = document.createElement("div");
//       div.classList.add("gif");
//       div.innerHTML = toSimpleView(gif);
//       gifWrapper.appendChild(div);
//     });
//   } catch (err) {
//     console.error(err);
//   } finally {
//     isLoading = false;
//   }
// };

// const handleScroll = () => {
//   const docHeight = document.documentElement.offsetHeight;
//   const scrollTop = document.documentElement.scrollTop;
//   const windowHeight = window.innerHeight;
//   const scrollDistance = docHeight - scrollTop - windowHeight;

//   if (scrollDistance <= 0) {
//     loadMoreGifs();
//   }
// };

// window.addEventListener("scroll", handleScroll);
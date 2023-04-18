import { q } from "../../events/helpers.js";
import { uploadNewGif } from "../api-calls.js";

export function createGifModule(window, document) {
  const saveGIFButton = q("#save-gif");
  const downloadAttrSupported = "download" in document.createElement("a");
  const createGIFButton = q("#create-gif");
  const gifSource = q("#GIFSource");
  const interval = q("#interval");
  const numFrames = q("#numFrames");
  const frameDuration = q("#frameDuration");
  const gifHeight = q("#gifHeight");
  const gifWidth = q("#gifWidth");
  const progressBar = q("progress");
  const text = q("#gifText");
  const fontSize = q("#fontSize");
  const fontColor = q("#fontColor");
  const textBaseline = q("#textBaseline");
  const gifshotImagePreview = q(".gifshot-image-preview-section");
  const placeholderDiv = q(".placeholder-div");
  const placeholderDivDimensions = q(".placeholder-div-dimensions");
  const gifshotCode = q(".gifshot-code");
  const gifshotCodeTemplate = q(".gifshot-code-template");
  const videoFile = q("#video-file");

  const getSelectedOptions = function () {
    return {
      gifWidth: Number(gifWidth.value),
      gifHeight: Number(gifHeight.value),
      images:
        gifSource.value === "images"
          ? [
              "http://i.imgur.com/2OO33vX.png",
              "http://i.imgur.com/qOwVaSN.png",
              "http://i.imgur.com/Vo5mFZJ.gif",
            ]
          : false,
      //   video: gifSource.value === "video" ? videoFile.files[0] : false,
      video: gifSource.value === "video" ? [videoFile.files[0]] : false,
      //   video: gifSource.value === "video" ? ["example.mp4"] : false,
      filter: "",
      interval: Number(interval.value),
      numFrames: Number(numFrames.value),
      frameDuration: Number(frameDuration.value),
      text: text.value,
      fontWeight: "normal",
      fontSize: fontSize.value + "px",
      fontFamily: "Calibri",
      fontColor: fontColor.value,
      textAlign: "center",
      textBaseline: textBaseline.value,
      sampleInterval: 10,
      numWorkers: 2,
    };
  };
  let passedOptions;

  const bindEvents = function () {
    createGIFButton.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        passedOptions = _.merge(_.clone(getSelectedOptions()), {
          progressCallback: function (captureProgress) {
            gifshotImagePreview.innerHTML = "";
            placeholderDiv.classList.add("hidden");
            progressBar.classList.remove("hidden");
            progressBar.value = captureProgress;
          },
        });
        console.log(passedOptions);

        const method = "createGIF";

        window.gifshot[method](passedOptions, function (obj) {
          if (!obj.error) {
            const image = obj.image;
            const animatedImage = document.createElement("img");

            animatedImage.src = image;

            progressBar.classList.add("hidden");
            progressBar.value = 0;

            placeholderDiv.classList.add("hidden");
            gifshotImagePreview.innerHTML = "";
            gifshotImagePreview.appendChild(animatedImage);

            if (downloadAttrSupported) {
              saveGIFButton.setAttribute("href", image);
              saveGIFButton.setAttribute("files", image);
              saveGIFButton.classList.remove("hidden");
            }
          } else {
            console.log("obj.error", obj.error);
            console.log("obj.errorCode", obj.errorCode);
            console.log("obj.errorMsg", obj.errorMsg);
          }
        });
      },
      false
    );

    saveGIFButton.addEventListener("click", function (e) {
      uploadNewGif(e);
    });
    // saveGIFButton.addEventListener(
    //   "click",
    //   function (e) {
    //     e.preventDefault();

    //     open(saveGIFButton.getAttribute("href"));
    //   },
    //   false
    // );
  };

  bindEvents();
}
document.addEventListener("load", () => {
  createGifModule(window, document);
});

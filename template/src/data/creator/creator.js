import { q } from "../../events/helpers.js";
import { uploadNewGif } from "../api-calls.js";

export function createGifModule(window, document) {
  const uploadGIFButton = q("#save-gif");
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
      video: gifSource.value === "video" ? [videoFile.files[0]] : false,
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
  uploadGIFButton.style.display = "none";
  progressBar.style.display = "none";

  const bindEvents = function () {
    createGIFButton.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        passedOptions = _.merge(_.clone(getSelectedOptions()), {
          progressCallback: function (captureProgress) {
            gifshotImagePreview.innerHTML = "";
            placeholderDiv.style.display = "none";
            progressBar.style.display = "block";
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
            animatedImage.id = "generated-gif";

            progressBar.style.display = "none";
            progressBar.value = 0;

            placeholderDiv.style.display = "none";
            gifshotImagePreview.innerHTML = "";
            gifshotImagePreview.appendChild(animatedImage);
            uploadGIFButton.style.display = "block";

          } else {
            console.log("obj.error", obj.error);
            console.log("obj.errorCode", obj.errorCode);
            console.log("obj.errorMsg", obj.errorMsg);
          }
        });
      },
      false
    );

    uploadGIFButton.addEventListener("click", function (e) {
      uploadNewGif(e);
    });
  };

  bindEvents();
}
document.addEventListener("load", () => {
  createGifModule(window, document);
});

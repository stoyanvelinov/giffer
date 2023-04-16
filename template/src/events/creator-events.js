// import _ from "lodash";
// import { createGif } from "../data/creator/gifshot.js";

export const loadCreator = (window, document) => {
  const saveGIFButton = document.querySelector("#save-gif");
  const downloadAttrSupported = "download" in document.createElement("a");
  const createGIFButton = document.querySelector("#create-gif");
  const gifSource = document.querySelector("#GIFSource");
  const interval = document.querySelector("#interval");
  const numFrames = document.querySelector("#numFrames");
  const frameDuration = document.querySelector("#frameDuration");
  const gifHeight = document.querySelector("#gifHeight");
  const gifWidth = document.querySelector("#gifWidth");
  const progressBar = document.querySelector("progress");
  const text = document.querySelector("#gifText");
  const gifshotImagePreview = document.querySelector(
    ".gifshot-image-preview-section"
  );
  const placeholderDiv = document.querySelector(".placeholder-div");
  const placeholderDivDimensions = document.querySelector(
    ".placeholder-div-dimensions"
  );
  const gifshotCode = document.querySelector(".gifshot-code");
  const gifshotCodeTemplate = document.querySelector(".gifshot-code-template");

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
      video:
        gifSource.value === "video" ? ["example.mp4", "example.ogv"] : false,
      filter: "",
      interval: Number(interval.value),
      numFrames: Number(numFrames.value),
      frameDuration: Number(frameDuration.value),
      text: text.value,
      fontWeight: "normal",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontColor: "#ffffff",
      textAlign: "center",
      textBaseline: "bottom",
      sampleInterval: 10,
      numWorkers: 2,
    };
  };
  var passedOptions;
  var updateCodeBlock = function (obj) {
    obj = obj || {};

    var targetElem = obj.targetElem;
    var selectedOptions = getSelectedOptions();
    var options = (function () {
      var obj = {};

      _.each(selectedOptions, function (val, key) {
        if (val) {
          obj[key] = val;
        }
      });

      return obj;
    })();
    var template = _.template(gifshotCodeTemplate.innerHTML, {
      gifshot: window.gifshot,
      selectedOptions: options,
      method: "createGIF",
    });
    // var code = escodegen.generate(esprima.parse(template), {
    //   format: {
    //     safeConcatenation: true,
    //   },
    // });

    // gifshotCode.innerHTML = code;

    // Prism.highlightElement(gifshotCode);

    if (
      targetElem &&
      (targetElem.id === "gifWidth" || targetElem.id === "gifHeight")
    ) {
      if (selectedOptions.gifHeight && selectedOptions.gifWidth) {
        gifshotImagePreview.innerHTML = "";
        placeholderDiv.style.height = selectedOptions.gifHeight + "px";
        placeholderDiv.style.width = selectedOptions.gifWidth + "px";
        placeholderDivDimensions.innerHTML =
          selectedOptions.gifWidth + " x " + selectedOptions.gifHeight;

        if (selectedOptions.gifWidth < 60 || selectedOptions.gifHeight < 20) {
          placeholderDivDimensions.classList.add("hidden");
        } else {
          placeholderDivDimensions.classList.remove("hidden");
        }

        placeholderDiv.classList.remove("hidden");
      } else {
        placeholderDiv.classList.add("hidden");
      }
    }
  };
  var bindEvents = function () {
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

        var method = "createGIF";

        gifshot[method](passedOptions, function (obj) {
          if (!obj.error) {
            var image = obj.image;
            var animatedImage = document.createElement("img");

            animatedImage.src = image;

            progressBar.classList.add("hidden");
            progressBar.value = 0;

            placeholderDiv.classList.add("hidden");
            gifshotImagePreview.innerHTML = "";
            gifshotImagePreview.appendChild(animatedImage);

            if (downloadAttrSupported) {
              saveGIFButton.setAttribute("href", image);
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

    saveGIFButton.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        window.open(saveGIFButton.getAttribute("href"));
      },
      false
    );

    document.addEventListener("change", function (e) {
      updateCodeBlock({
        targetElem: e.target,
      });
    });

    document.addEventListener("keyup", function (e) {
      updateCodeBlock({
        targetElem: e.target,
      });
    });
  };

  bindEvents();
  updateCodeBlock({
    targetElem: gifWidth,
  });
};

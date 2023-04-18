export const toCreatorView = () => {
  return `
  <div id="container">
  <div class="create-container text-center">
      <div class="create-buttons">
        <div>
          <a href="#" type="button" id="create-gif" class="btn btn-large btn-primary create-gif-button" role="button">Create GIF</a>
        </div>
        <div>
          <a href="#" type="button" id="save-gif" class="upload-gif btn btn-large btn-default " role="button" style="padding-left:10px">Upload GIF</a>
        </div>  
      </div>
      <div class="create-preview">
      <div id="msg"></div>
        <h5>
          Preview
        </h5>
        
        <section class="gifshot-image-preview-section"></section>
        <div class="placeholder-div hidden">
          <span class="placeholder-div-dimensions"></span>
        </div>
        <progress max="1" value="0" class="gifshot-progress-bar hidden"></progress>
      </div>
    <div class="create-options">
          <form class="options-form" action="">
            <div class="form-group">
              <label for="GIFSource">GIF Source</label>
              <div class="button custom-select">
                <select name="GIFSource" id="GIFSource" class="form-control">
                  <option value="webcam">webcam</option>
                  <option value="video">video</option>
                  <option value="images">images</option>
                </select>
              </div>
            </div>
            
            <div class="form-group" id="input-container">
              <div class="input-group">
                <input type="file" accept="mp4" id="video-file" name="file" multiple>
                
              </div>
            </div>
            <div class="form-group">
              <label for="gifWidth">GIF Width - in pixels</label>
              <div class="input-group">
                <input name="gifWidth" id="gifWidth" class="form-control" value="200" size="5" type="number"></input>
              </div>
            </div>
            <div class="form-group">
              <label for="gifHeight">GIF Height - in pixels </label>
              <div class="input-group">
                <input name="gifHeight" id="gifHeight" class="form-control" value="200" size="5" type="number"></input>
              </div>
            </div>
            <div class="form-group">
              <label for="interval">Interval - in seconds</label>
              <div class="input-group">
                <input name="interval" id="interval" class="form-control" value=".1" step=".1" size="5" type="number"></input>
              </div>
            </div>
            <div class="form-group">
              <label for="numFrames">Number of Frames</label>
              <input name="numFrames" id="numFrames" class="form-control" value="10" size="5" type="number"></input>
            </div>
            <div class="form-group">
              <label for="frameDuration">Frame Duration</label>
              <input name="frameDuration" id="frameDuration" class="form-control" value="1" step="1" size="5" type="number"></input>
            </div>
            <div class="form-group">
              <label for="gifText">GIF Text</label>
              <input name="gifText" id="gifText" class="form-control" value="" size="30" placeholder="Add text here..."></input>
            </div>
            <div class="form-group">
              <label for="fontSize">Font Size - in pixels</label>
              <div class="input-group">
                <input name="fontSize" id="fontSize" class="form-control" value="16" size="5" type="number"></input>
              </div>
            </div>
            
            <div class="form-group">
              <label for="fontColor">Font Color</label>
              <input type="color" name="fontColor" id="fontColor" class="form-control" value="#FFFFFF" size="5"></input>
            </div>
            <div class="form-group">
              <label for="textBaseline">Text Baseline</label>
              <div class="button custom-select">
                <select name="textBaseline" id="textBaseline" class="form-control">
                  <option value="bottom">bottom</option>
                  <option value="center">center</option>
                  <option value="top">top</option>
                </select>
              </div>
            </div>
          </form>
    </div>
  </div>
  <script src=".src/data/creator/creator.js" type="module"></script>
  <script src=".src/events/creator-events.js" type="module"></script>
</div>
 
    `;
};

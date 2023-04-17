export const toCreatorView = () => {
  return `
    <div class="container text-center">
    <div>
       
      <!-- demo-section  -->
      <section class="demo-section v-center">

          <span class="options-button-group">
            <a href="#" type="button" id="create-gif" class="btn btn-large btn-primary create-gif-button" role="button">Create GIF</a>
            <a href="#" type="button" id="save-gif" class="btn btn-large btn-default save-gif-button hidden" role="button" download="gifshot-demo.gif">Download GIF</a>
          </span>
        <div>
          <div class="row">
            <div class="col-md-2 options-section">
              <h3>Options</h3>
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
                <div class="form-group">
                  <label for="GIFType">GIF type</label>
                  <div class="button custom-select">
                    <select name="GIFType" id="GIFType" class="form-control">
                      <option value="animated">Animated</option>
                      <option value="snapshot">Snap Shot</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="gifWidth">GIF Width</label>
                  <div class="input-group">
                    <input name="gifWidth" id="gifWidth" class="form-control" value="200" size="5" type="number"></input>
                    <div class="input-group-addon">px</div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="gifHeight">GIF Height</label>
                  <div class="input-group">
                    <input name="gifHeight" id="gifHeight" class="form-control" value="200" size="5" type="number"></input>
                    <div class="input-group-addon">px</div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="filter">Filter</label>
                  <div class="input-group">
                    <input name="filter" id="filter" class="form-control" value="" type="text"></input>
                  </div>
                </div>
                <div class="form-group">
                  <label for="interval">Interval</label>
                  <div class="input-group">
                    <input name="interval" id="interval" class="form-control" value=".1" step=".1" size="5" type="number"></input>
                    <div class="input-group-addon">secs</div>
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
                  <label for="fontWeight">Font Weight</label>
                  <div class="button custom-select">
                    <select name="fontWeight" id="fontWeight" class="form-control">
                      <option value="normal">normal</option>
                      <option value="bold">bold</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="fontSize">Font Size</label>
                  <div class="input-group">
                    <input name="fontSize" id="fontSize" class="form-control" value="16" size="5" type="number"></input>
                    <div class="input-group-addon">px</div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="fontFamily">Font Family</label>
                  <div class="button custom-select">
                    <select name="fontFamily" id="fontFamily" class="form-control">
                      <option value="sans-serif">sans-serif</option>
                      <option value="Arial">Arial</option>
                      <option value="Calibri">Calibri</option>
                      <option value="Times New Roman">Times New Roman</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="fontColor">Font Color</label>
                  <input type="color" name="fontColor" id="fontColor" class="form-control" value="#FFFFFF" size="5"></input>
                </div>
                <div class="form-group">
                  <label for="textAlign">Text Align</label>
                  <div class="button custom-select">
                    <select name="textAlign" id="textAlign" class="form-control">
                      <option value="center">center</option>
                      <option value="left">left</option>
                      <option value="right">right</option>
                    </select>
                  </div>
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
                <div class="form-group">
                  <label for="sampleInterval">Sample Interval</label>
                  <input name="sampleInterval" id="sampleInterval" class="form-control" value="10" size="5" type="number"></input>
                </div>
                <div class="form-group">
                  <label for="numWorkers">Num Workers</label>
                  <input name="numWorkers" id="numWorkers" class="form-control" value="2" size="5" type="number"></input>
                </div>
              </form>
            </div>
            <div class="col-md-5 text-center code-section">
              <section>
                <h3>
                  Code
                </h3>
                <pre class="language-javascript">
                  <code class="gifshot-code"></code>
                </pre>
              </section>
            </div>
            <div class="col-md-5 text-center preview-section">
              <h3>
                Preview
              </h3>
              <section class="gifshot-image-preview-section"></section>
              <div class="placeholder-div hidden">
                <span class="placeholder-div-dimensions"></span>
              </div>
              <progress max="1" value="0" class="gifshot-progress-bar hidden"></progress>
            </div>
          </div>
        </div>
      </section>

      <!-- footer  -->
      <footer class="footer v-center">
        <div class="container">
          <h4>Made by <a href="http://sports.yahoo.com">Yahoo Sports</a></h4>
          <p style="margin: 0">
            All code on this site is licensed under the
            <a href="https://github.com/yahoo/gifshot/blob/master/LICENSE.txt">Yahoo MIT License</a> unless stated.
          </p>
        </div>
      </footer>
      <script src="../data/creator/dependencies/gifshot.min.js"></script>
      <script src="../data/creator/dependencies/prism.min.js"></script>
      <script src="../data/creator/dependencies/esprima.min.js"></script>
      <script src="../data/creator/dependencies/escodegen.min.js"></script>
      <script src="../data/creator/dependencies/lodash.min.js"></script>
      <script src="../data/creator/dependencies/classList.js"></script>
  <script class="gifshot-code-template" type="text/template">
        gifshot.<%- method %>({
          <% _.forEach(selectedOptions, function(val, key) {
            if(gifshot.defaultOptions[key] !== val) { %>
              <%= key %>: <% if(_.isString(val)) { %>'<%= val %>' <% }
              else if(_.isArray(val)) { %>
                <%= JSON.stringify(val) %> <% }
              else { %> <%= val %> <%} %>,
            <% } %>
          <% }); %>
        }, function(obj) {
          if(!obj.error) {
            var image = obj.image,
            animatedImage = document.createElement('img');
            animatedImage.src = image;
            document.body.appendChild(animatedImage);
          }
        });
      </script>
      <script src="../data/creator/creator.js"></script>
    </div>
 
    `;
};

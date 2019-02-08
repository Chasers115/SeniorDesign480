/*: =========================================================
 *  RMMVOutputNode.js
 *  @plugindesc A plugin for RMMV to write files using Node.js
 *  @author Chase Starcher with help from PluginDev
 *  For Use in The Bystander Intervention Simulator
 * ========================================================== */


(function () {

    //Setup function in case we want to split up our code further  
    function setup() {
        //=============================================================================
        //  MVNodeFS
        //=============================================================================    
        function MVOutputNode() {

        }

        MVOutputNode.fs = require("fs");

        //Wrapper for Node.js writeFileSync
        MVOutputNode.writeFile = function (filePath, filename, data) {
            filePath = this.createPath("/" + filePath + "/");
            this.fs.writeFileSync(filePath + filename, data);
            console.log("Wrote File: " + filename);
        };

        //Wrapper for Node.js readFileSync
        MVOutputNode.readFile = function (filePath, filename) {
            filePath = this.createPath("/" + filePath + "/");
            console.log("Read File:", filename);
            //Returning the file we read using utf8 encoding; this means it will be in text
            return this.fs.readFileSync(filePath + filename, "utf8");
        };

        //Method for creating the proper file path from the relative file path
        MVOutputNode.createPath = function (relativePath) {

            //Checks if MV is in dev mode or production and appropriate path
            relativePath = (Utils.isNwjs() && Utils.isOptionValid("test")) ? relativePath : "/www/" + relativePath;

            //Creates the path
            var path = window.location.pathname.replace(/(\/www|)\/[^\/]*$/, '/');
            if (path.match(/^\/([A-Z]\:)/)) {
                path = path.slice(1);
            }

            //Decode URI component and return the path
            path = decodeURIComponent(path) + "Testing.txt";
            return path;
        };

        //Export Class
        window.MVOutputNode = MVOutputNode;
    }

    //Execute setup function
    setup();
})();





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

        MVOutputNode.output = function (od1, od2, od3) {
            fs.appendFile('myText.xls', od1 + "\t" + od2 + "\t" + od3 + "\t" + $gameSystem.playtimeText() + "\n", function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        }

        //Export Class
        window.MVOutputNode = MVOutputNode;
    }

    //Execute setup function
    setup();
})();
/*: =========================================================
 *  RMMVOutputNode.js
 *  @plugindesc A plugin for RMMV to write files using Node.js
 *  @author Chase Starcher with help from PluginDev
 *  For Use in The Bystander Intervention Simulator
 * ========================================================== */







//(function () {

    //Setup function in case we want to split up our code further  
    //function setup() {
        //=============================================================================
        //  MVNodeFS
        //============================================================================= 
        
        var fs = require('fs');

        function MVOutputNode(od1, od2, od3) {




            var playerName = $gameActors.actor(1).name();

            fs.appendFile(playerName + '.xls', od1 + "\t" + od2 + "\t" + od3 + "\t" + $gameSystem.playtimeText() + "\n", function (err) {
                console.log("Writting to the file");
                if (err) {
                    return console.log(err);
                }
            });




        }



        //Export Class
     
    //}

    //Execute setup function
    //setup();
//})();


(function() {
    
    //does alaising so there isnt interference with other plugins.
    var _Bystander_output = Game_Interpreter.prototype.pluginCommand;
    

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Bystander_output.call(this, command, args);


        //function call for populating tables that will be used in the game.
        if (command == "outputData")
        {   
            //get variables.
/*



*/

            //MVOutputNode.output(3, $gameVariables.value(3), 1);


            //do lookup to the excel sheet.

            var fileContents = fs.readFileSync('js\\plugins\\MetaData.json');
            var jsonContent = JSON.parse(fileContents);
            let goodChoice;
            //search for the particular ID in the json thing for a scenario that matches the ID
            for (let i = 0; i < jsonContent.length; i++)
            {
               // console.log('Within a for loop');
                console.log(jsonContent[i].SceneID)
                if (jsonContent[i].SceneID == args[0])
                {
                    console.log('Best Choice Var' + jsonContent[i].BestChoice);
                    console.log('printing the value of the variable' + $gameVariables.value(args[0]));
                    //found the correct scenario
                    if ($gameVariables.value(args[0]) == jsonContent[i].BestChoice){
                        console.log("Good choice");
                        goodChoice = 1;
                        $gameVariables.setValue(500, $gameVariables.value(500)+1);
                        //$gameVariables.value(500) += 1;
                        
                    }
                    else{
                        console.log("poor choice");
                        goodChoice = 0;
                    }
                    console.log('number of correct scenarios so far: ' + $gameVariables.value(500));
                }
            }
            //$gameTemp.reserveCommonEvent(5);
            //$gameTemp.reserveCommonEvent(5);
            //$gameMessage.add('Doop');
            //$gameTemp.reserveCommonEvent(6);
            console.log('correctly recognized the plugin command');

            MVOutputNode(args[0], $gameVariables.value(args[0]), goodChoice);

            window.MVOutputNode = MVOutputNode;

        }


    };



})();
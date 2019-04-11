/*:
*
*@plugindesc PLug in used for populating, and using arrays for scene activation
*
*@author Bystander Intervention
*
*
*@param Code Parameter
*@desc Attempt to use code as a parameter (call on this function!)
*@default math.round(20/1.6) + 5
*
*
*

*
*@help
*
*This is where we put information
*This should be tips on how to use
*
*
*/
/*
Our main goal then will be to access function calls from plugin commands.
With these commands, we should hopefully be able to contorl the flow of things better.
To start, we should probably have a specific button that you press that creates a scene.
This button will generate the scene, and give a dialogue message that tells the player where the scene is
This would most likely use informatoin that can be added to the excel sheet.
Use the map number to access this information. 
That also means we have to main each room with something descriptive.
But anyway, tell the player where each scene is for beta testing purposes. 
Later on, we should have some sort of visual representation that tells the player where each scenario is.
Once we get that, then we can make it so the engine handles generating scenes, rather than the player.

*/



/*Below is an example on how to use plugin commands. It may be a little rudamentary, but it should work.
*/


//import tools from "../Scene_Info.js";

//Put ALL functionality inside

//const SceneList = require('./fullMock.json');



//const fs = require('fs');
var data;


//console.log(data);
//console.log(config.firstName + ' ' + config.lastName);

var indexChosen;
var index;
var min = 0;
var max = 1;

var counter = 4;




var mainArray = [];
var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];


var fs = require('fs');


function populateTables() {
    //PUT LOGIC FOR POPULATING THE TABLES HERE.
    //$gameMessage.add("Attempting to read");

    /*\
    jsonContent is a JSON object that looks exactly like fullMock.json (fullMeta later)
    if you want to access items in the first element do jsonContent[0].ELEMENTWANTED.
    */

    var fileContents = fs.readFileSync('js\\plugins\\MetaData.json');
    var jsonContent = JSON.parse(fileContents);

    //var scenes = jsonContent.length;

    for (var i = 0; i < jsonContent.length; i++) {
        if (jsonContent[i].Risk == '1') {
            array1.push(jsonContent[i].SceneID2);
        }
        if (jsonContent[i].Risk == '2') {
            array2.push(jsonContent[i].SceneID2);
        }
        if (jsonContent[i].Risk == '3') {
            array3.push(jsonContent[i].SceneID2);
        }
        if (jsonContent[i].Risk == '4') {
            array4.push(jsonContent[i].SceneID2);
        }
        if (jsonContent[i].Risk == '5') {
            array5.push(jsonContent[i].SceneID2);
        }
    }

    mainArray.push(array1);
    mainArray.push(array2);
    mainArray.push(array3);
    mainArray.push(array4);
    mainArray.push(array5);

    //$gameMessage.add("Tables Populated")
    activateScene();
    $gameSwitches.setValue(2000, false);






    //var fileContents = await fs.promises.readFile('js/plugins/fullMock.json');
    // $gameMessage.add('Read');
    //data = JSON.parse(fileContents);
    //$gameMessage.add('doing a thing');
    // $gameMessage.add(data);
}
function activateScene() {

    var count = 0;
    counter++;

    if (counter == 5) {
        //Number generator to pick 5 scenes
        while(count < 5)
        {
        //determines what risk level to choose
        //generate a number between 1 and 100
        indexChosen = Math.floor((Math.random() * 100) + 1);


        if (indexChosen <= 75 && mainArray[4] != 0) {

            //insert condition    

            //if the risk level has no more scenes pick the next risk level
            if (mainArray[min].length == 0 || min >= 5) {
                min++;

                if (max <= 3) {
                    max++;
                }
            }



            index = Math.floor(Math.random() * mainArray[min].length);
            $gameMessage.add("scene to activate is " + mainArray[min][index]);
            $gameSwitches.setValue(mainArray[min][index], true);
            mainArray[min].splice(index, 1); //Remove the item from the array




        }
        else if (indexChosen > 75 && mainArray[4] != 0) {


            index = Math.floor(Math.random() * mainArray[max].length); //generate a random number
            $gameMessage.add("scene to activate is " + mainArray[max][index]);
            $gameSwitches.setValue(mainArray[max][index], true);
            mainArray[max].splice(index, 1); // Remove the item from the array



        }
        else {

            $gameMessage.add("No more");

        }

        count++;
        }

        counter = 0;
    }

    $gameSwitches.setValue(1999, false);



}
(function () {

    //does alaising so there isnt interference with other plugins.
    var _Bystander_pluginCommand = Game_Interpreter.prototype.pluginCommand;


    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Bystander_pluginCommand.call(this, command, args);


        //function call for populating tables that will be used in the game.
        if (command == "populateTables") {
            // $gameMessage.add('Populating Tables to be used.');
            //function call on Scene_info file to populate the Tables
            // tools.populate_tables();
            //$gameMessage.add('popuating tables incorrectly');
            populateTables();



        }

        //function call for activating a scene
        else if (command == "activateScene") {
            //leave this as it is. 
            activateScene();

        }

        //function call for deleting a scene.
        else if (command == "deleteScene") {
            $gameMessage.add('Deleting a used scene');
        }
    };



})();
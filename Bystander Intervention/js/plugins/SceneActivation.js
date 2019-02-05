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
var riskLevel;
var min = 0;
var max = 1;
var maxScenes = 15;
var index;
var num0 = 1
var num1 = 16;
var num2 = 31;
var num3 = 46; 
var num4 = 61;


var mainArray = [];
var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];








var array = [];
array.push( [] );
array.push( [] );
array.push( [] );
array.push( [] );
array.push( [] );

//populate the risk level arrays with the scene id arrays
//index zero is risk level 1
for (var a = 0; a < maxScenes; a++)
{
    array[0][a] = num0;
    num0++;
}

//index 1 is risk level 2
for (var b = 0; b < maxScenes; b++)
{
    array[1][b] = num1;
    num1++;
}

//index 2 is risk level 3
for (var c = 0; c < maxScenes; c++)
{
    array[2][c] = num2;
    num2++;
}

//index 3 is risk level 4
for (var d = 0; d < maxScenes; d++)
{
    array[3][d] = num3;
    num3++;
}

//index 4 is risk level 5
for (var e = 0; e < maxScenes; e++)
{
    array[4][e] = num4;
    num4++;
}
//end of call
console.log(array);


//Number generator to pick 5 scenes
while(array[4].length != 0)
{
    //determines what risk level to choose
    //generate a number between 1 and 100
    indexChosen = Math.floor((Math.random() * 100) + 1);
    console.log(indexChosen);

    if(indexChosen <= 75 || array.length == 1)
    {
        //pick the base risk level
        riskLevel = min;
            
        //insert condition    
            
        //if the risk level has no more scenes pick the next risk level
        if(array[min].length == 0 || min >= 5)
        {
            min++;
        }
        
        
            index = Math.floor( Math.random()*array[min].length );
            console.log("scene to activate is " + array[min][index]);
            array[min].splice(index, 1); //Remove the item from the array
            console.log(array)
        
        
        
    }
    if(indexChosen > 75)
    {
        //pick the next highest risk level
        riskLevel = max;
        
        //if the risk level has no more scenes pick the next risk level
        if(array[max].length == 0 || max >= 5)
        {
            max++;
        }
    
        
            index = Math.floor( Math.random()*array[max].length ); //generate a random number
            console.log("scene to activate is " + array[max][index]); 
            array[max].splice(index, 1); // Remove the item from the array
            console.log(array)
        
        
    } 
    
}



var fs = require('fs');


function populateTables() {
    //PUT LOGIC FOR POPULATING THE TABLES HERE.
    //$gameMessage.add("Attempting to read");

/*\
jsonContent is a JSON object that looks exactly like fullMock.json (fullMeta later)
if you want to access items in the first element do jsonContent[0].ELEMENTWANTED.




*/


   var fileContents = fs.readFileSync('js\\plugins\\fullMock.json');
   var jsonContent = JSON.parse(fileContents);
   $gameMessage.add(jsonContent[1].SceneID);





    //var fileContents = await fs.promises.readFile('js/plugins/fullMock.json');
   // $gameMessage.add('Read');
    //data = JSON.parse(fileContents);
    //$gameMessage.add('doing a thing');
    $gameMessage.add(data);
}
function activateScene(){
    $gameMessage.add(array1[0]);













    
}
(function() {
    
    //does alaising so there isnt interference with other plugins.
    var _Bystander_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Bystander_pluginCommand.call(this, command, args);


        //function call for populating tables that will be used in the game.
        if (command == "populateTables")
        {   
           // $gameMessage.add('Populating Tables to be used.');
            //function call on Scene_info file to populate the Tables
           // tools.populate_tables();
            //$gameMessage.add('popuating tables incorrectly');
            populateTables();



        }

        //function call for activating a scene
        else if (command == "activateScene")
        {
            //leave this as it is. 
           activateScene();

        }

        //function call for deleting a scene.
        else if (command == "deleteScene")
        {
           $gameMessage.add('Deleting a used scene');
        }
    };



})();
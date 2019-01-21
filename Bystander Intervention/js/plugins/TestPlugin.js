/*:
*
*@plugindesc This is mainly a test for the plugin
*Break Line
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
*
*
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
(function() {

    var _Game_Interperter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interperter_pluginCommand.call(this, command, args);


        if (command == "activateScene")
        {
            var number = Number(args[0]) + Number(args[1]);
            $gameMessage.add(String(number));
        }
    };



})();
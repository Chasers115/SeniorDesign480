/*

*@plugindesc alt menu
*@author Senior Design
*@help do the thing
*/
(function () {
var _Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    //this.createGoldWindow();
    //this.createStatusWindow();
    
    /*
    this._commandWindow
    */
   this._commandWindow.x = 300;
   this._commandWindow.y = 250;
};
//Window_MenuCommand.prototype.windowWidth = function() {
  //  return 500;
//};




Scene_Menu.prototype.start = function() {
   // Scene_MenuBase.prototype.start.call(this);
    //this._statusWindow.refresh();
};
})();
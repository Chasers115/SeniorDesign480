// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"HIME_CustomPageConditions","status":true,"description":"v1.4 - Create your own page conditions for your events using\r\nregular eventing!","parameters":{}},
{"name":"GALV_MoveRouteExtras","status":true,"description":"Additional SCRIPT commands to use within MOVE ROUTES\r\nView the plugin \"Help\" to view available commands.","parameters":{}},
{"name":"YEP_ButtonCommonEvents","status":true,"description":"v1.02 On the field map, call common events when certain\nbuttons are pressed on the keyboard.","parameters":{"---Top Row---":"","Key ~":"0","Key 1":"0","Key 2":"0","Key 3":"0","Key 4":"0","Key 5":"0","Key 6":"0","Key 7":"0","Key 8":"0","Key 9":"0","Key 0":"0","Key -":"0","Key =":"0","---2nd Row---":"","Key Q (PageUp)":"0","Key W (PageDown)":"0","Key E":"0","Key R":"0","Key T":"0","Key Y":"0","Key U":"0","Key I":"0","Key O":"0","Key P":"1","Key [":"2","Key ]":"3","Key \\":"0","---3rd Row---":"","Key A":"0","Key S":"0","Key D":"0","Key F":"0","Key G":"0","Key H":"0","Key J":"0","Key K":"0","Key L":"0","Key ;":"0","Key \"":"0","Key Enter (OK)":"0","---4th Row---":"","Key Shift (Dash)":"0","Key Z (OK)":"0","Key X (Cancel)":"0","Key C":"0","Key V":"0","Key B":"0","Key N":"0","Key M":"4","Key ,":"0","Key .":"0","Key /":"0","---Misc---":"","Key Space (OK)":"0","Key Left (Left)":"0","Key Up (Up)":"0","Key Right (Right)":"0","Key Down (Down)":"0","Key Insert (Cancel)":"0","Key Delete":"0","Key Home":"0","Key End":"0","Key Page Up (PageUp)":"0","Key Page Down (PageDown)":"0","---NumPad---":"","Key NumPad 0 (Cancel)":"0","Key NumPad 1":"0","Key NumPad 2 (Down)":"0","Key NumPad 3":"0","Key NumPad 4 (Left)":"0","Key NumPad 5":"0","Key NumPad 6 (Right)":"0","Key NumPad 7":"0","Key NumPad 8 (Up)":"0","Key NumPad 9":"0","Key NumPad .":"0","Key NumPad +":"0","Key NumPad -":"0","Key NumPad *":"0","Key NumPad /":"0"}},
{"name":"SceneActivation","status":true,"description":"PLug in used for populating, and using arrays for scene activation","parameters":{"Code Parameter":"math.round(20/1.6) + 5"}},
{"name":"MVOutputNode","status":true,"description":"A plugin for RMMV to write files using Node.js","parameters":{}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_X_MessageBacklog","status":true,"description":"v1.01 (Requires YEP_MessageCore.js) Add a message backlog\nfunction to your game's message system!","parameters":{"---Backlog Key---":"","LogKeyButton":"tab","EnableLogKey":"true","---Settings---":"","DefaultLogging":"false","LogSpecialInput":"true","SpecialInputFmt":"»%1","MaximumEntries":"20","ScrollBarEnabled":"false","ScrollBarColor":"0","ScrollBarSpriteCode":"\"// Establish basic measurements\\nvar padding = backlogWindow.standardPadding();\\nvar width = padding / 2;\\nvar height = Graphics.boxHeight;\\n\\n// Calculate number of visible rows\\nvar visibleRows = backlogWindow.height - padding * 2;\\nvisibleRows = Math.floor(visibleRows / backlogWindow.lineHeight());\\nif (visibleRows < backlogWindow.maxItems()) {\\n  height *= visibleRows / Math.max(1, backlogWindow.maxItems());\\n}\\n\\n// Calculate the size of a basic scrolling increment\\nvar max = Math.floor(Math.max(1, backlogWindow.maxItems()) / backlogWindow.maxCols()) - 1;\\nthis._increment = Graphics.boxHeight / Math.max(1, max);\\n\\n// Generate the bitmap\\nthis.bitmap = new Bitmap(width, height);\\nthis.bitmap.fillAll(backlogWindow.textColor(scrollBarColor));\"","ScrollSpeed":"4","ScrollWrap":"true","---Visual---":"","BackgroundType":"1","BackOpacity":"192","DimColor1":"rgba(0, 0, 70, 0.8)","DimColor2":"rgba(120, 0, 0, 0.8)","Picture":"","PictureOpacity":"255","PictureStretch":"true"}}
];

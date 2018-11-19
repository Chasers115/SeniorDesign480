var fs = require("fs");

var fileName = "Book3.xml";

var parser = require("xml2js");
//read xml file

fs.readFile(fileName, function(err, data) {

//converting xml to json

parser.parseString(data, function (err, result) {

//To store the json to file

fs.writeFile("data.json",JSON.stringify(result),function(err,response){

});

//To display the json

console.log(JSON.stringify(result));

});
});
 
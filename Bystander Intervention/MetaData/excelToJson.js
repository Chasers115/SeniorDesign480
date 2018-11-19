'use strict';


const excelToJson = require('convert-excel-to-json');

const result = excelToJson(
    {
        sourceFile: 'Book3.xlsx',
        header: 
        {
            rows: 1
        },
        columnToKey:
        {
            A: 'SceneID',
            B: 'Title',
            C: 'Risk',
            D: 'mapID',
            E: 'EventID'

        }
    });

    //truncates some header information, so the Json is just an array.
    var singleResult = result.Sheet1;
    //console.log(test);

    
    console.log(singleResult.length);
    let length = Math.ceil(singleResult.length);
    let part;
    console.log("Starting parse");
    let i;
    /*For loop will go through the updated file, and get each line. It will then output
    each lineas its own json. 
    NOTE: if it will be easier to just use one Json file, the commented out section is below. 
    */ 
    for(i = 0; i < length; i++)
    {
        //console.log(i);
        //
            part = singleResult[i];
    

var fs = require('fs');

//write the json to a json file titled "fullMeta.json". This will all end up on one line though,
//so there will need to be another function call to transform that file into multiple json files
//for easier usability. 
fs.writeFile('Scenario' + part.SceneID+'.json', JSON.stringify(part), (err) => {
    if(err){
        console.error(err);
        return;
    };
    //console.log("Should be good");
})


        console.log(part);
        console.log("NEW LINE");
    }
//result will be the object
//console.log(result);
//var fs = require('fs');

//write the json to a json file titled "fullMeta.json". This will all end up on one line though,
//so there will need to be another function call to transform that file into multiple json files
//for easier usability. 
/*fs.writeFile('fullMeta.json', JSON.stringify(test), (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Should be good");
})
*/



/*Strucure:
Use JSON.parse. 
If needed, you may need top open the file and read it in. 
We still have result actually, so this could work in our favor. 

use something like 
let sp



*/


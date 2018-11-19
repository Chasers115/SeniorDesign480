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
            A: 'Title',
            B: 'Title',
            C: 'Risk',
            D: 'mapID',
            E: 'EventID'

        }
    });

//result will be the object
console.log(result);
var fs = require('fs');

fs.writeFile('fullMeta.json', JSON.stringify(result), (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Should be good");
})
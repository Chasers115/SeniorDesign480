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




//mock function call for populate
/*
export function populate_tables() {
    //$gameMessage.add('populaitng tables from Scene_info');
  
}*/
module.exports = {
    populate_tables: function() {
        console.log("Populating tables inside code");
    },
    multiply: function(a,b) {
        return a*b
    }
};
//call when making a new game
//define an array with 5 risk level arrays
var array = [];
array.push( [] );
array.push( [] );
array.push( [] );
array.push( [] );
array.push( [] )

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
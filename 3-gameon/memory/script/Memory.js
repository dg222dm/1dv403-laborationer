"use strict";

var Memory = {
    
    memoryArray: [], //Skapa en egenskap på ditt objekt som senare kommer att referera till den utslumpade arrayen
    rows:4,
    cols: 4,
    indexCount: 0,
    lastClicked: null,
    flips: 0,
    turns: 0,
    tries: 0,
    imageDefault: "pics/0.png",
    
    init:function(){
        
        //Skapa ett objekt
        Memory.memoryArray = RandomGenerator.getPictureArray(Memory.rows,Memory.cols); 
        console.log(Memory.memoryArray);
        
        //Skapa en tabell
        Memory.table = document.createElement("table");
        Memory.table.border = 2;
 
        //ta in div taggen 
        Memory.gameBoard = document.getElementById("memory_board");
       
        //skriv ut tabell
        for (var i = 0; i < Memory.rows; i += 1) //Varje rad
        {
            var row = document.createElement("tr");
            Memory.table.appendChild(row);
            for (var j = 0; j < Memory.cols; j += 1) //Varje cell
            {
                var cell = document.createElement("td");
                var img = document.createElement("img");
                var aTag = document.createElement("a");
                aTag.picture = "pics/"+Memory.memoryArray[Memory.indexCount]+ ".png"; //Memory.memoryArray[Memory.indexCount];
                aTag.href = "#href";
                img.src = Memory.imageDefault; //http://www.w3schools.com/jsref/prop_img_src.asp
                aTag.appendChild(img);
                cell.appendChild(aTag);
                row.appendChild(cell);
                aTag.addEventListener("click", Memory.flipTile);
                Memory.indexCount += 1;
                Memory.run = true;
                
            }
            Memory.table.appendChild(row);
        }
        Memory.gameBoard.appendChild(Memory.table);
    },
        flipTile:function()
        {
            if(Memory.run === true)
            {
                this.firstChild.src = this.picture;
                Memory.flips += 1;
                if(Memory.flips === 2)
                {
                    var currentFlip = this;
                    var last = Memory.lastClicked;
                    Memory.run = false;
                    Memory.tries += 1;
                    document.getElementById("tries").innerHTML = "Tries: " + Memory.tries;
                
                    if(currentFlip.picture === last.picture)
                    {
                        setTimeout(function()
                        {
                            currentFlip.removeEventListener("click", Memory.flipTile);
                            last.removeEventListener("click", Memory.flipTile);
                            Memory.run = true;
                            Memory.turns += 1;
                        }, 600);
                       
                    }
                    else
                    {
                        setTimeout(function() 
                        {
                            currentFlip.firstChild.src = Memory.imageDefault;
                            last.firstChild.src = Memory.imageDefault;
                            Memory.run = true;
                        }, 900);
                    }
                    Memory.flips = 0;
                
                }
                Memory.lastClicked = this;
            }
            if (Memory.turns === Memory.memoryArray.length / 2)
            {
                document.getElementById("win").innerHTML = "Win";
            }
        }
};
window.onload = Memory.init;


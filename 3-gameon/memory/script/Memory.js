"use strict";

var Memory = {
    
    memoryArray: [], //Skapa en egenskap på ditt objekt som senare kommer att referera till den utslumpade arrayen
    rows:4,
    cols: 4,
    indexCount: 0,
    lastClicked: null,
    flips: 0,
    imageDefault: "pics/0.png",
    
    init:function(){
        
        //Skapa ett objekt
        Memory.memoryArray = RandomGenerator.getPictureArray(Memory.rows,Memory.cols); //I init-metoden anropar du arrayslumpsmetoden och sparar resultatet i egenskapen du skapade i 4an
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
            }
            Memory.table.appendChild(row);
        }
        Memory.gameBoard.appendChild(Memory.table);
    },
    flipTile:function()
    {
        this.firstChild.src = this.picture;
        Memory.flips += 1;
        console.log(Memory.flips);
        if(Memory.flips === 2)
        {
            var currentFlip = this;
            var last = Memory.lastClicked;
            //console.log(last);
            //console.log(current);
            //console.log(current.picture);
            
            if(currentFlip.picture === last.picture) //varför fungerar inte current === last? för att det pekar på 2 atags?
            {
                currentFlip.removeEventListener("click", Memory.flipTile);
                last.removeEventListener("click", Memory.flipTile);
            }
            else
            {
                setTimeout(function() 
                {
                    Memory.currentFlip = Memory.imageDefault;   
                }, 800);
            }
            Memory.flips = 0;
            console.log(Memory.flips);
        }
        Memory.lastClicked = this;
    }

};
window.onload = Memory.init;


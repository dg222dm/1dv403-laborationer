"use strict";

var Memory = {
    
    memoryArray: [], //Skapa en egenskap på ditt objekt som senare kommer att referera till den utslumpade arrayen
    rows:4,
    cols: 4,
    indexCount: 0,
    
    init:function(){
        
        //Skapa ett objekt
        Memory.memoryArray = RandomGenerator.getPictureArray(Memory.rows,Memory.cols); //I init-metoden anropar du arrayslumpsmetoden och sparar resultatet i egenskapen du skapade i 4an
        //console.log(Memory.memoryArray);
        
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
            console.log(Memory.memoryArray[i]);
            
            for (var j = 0; j < Memory.cols; j += 1) //Varje cell
            {
                Memory.indexCount += 1;
                Memory.cell = document.createElement("td");
                Memory.img = document.createElement("img");
                Memory.aTag = document.createElement("a");
                Memory.img.className = "pics/"+Memory.memoryArray[Memory.indexCount]+".png"; //[0,1,2,3] om arrayn får värdena [2,3,2,3] så ska det bli [2.png, 3.png, 2.png, 3.png]
                Memory.aTag.href = "#href";
                //console.log(Memory.memoryArray[j]);
                Memory.img.src = "pics/0.png";
                Memory.aTag.appendChild(Memory.img);
                Memory.cell.appendChild(Memory.aTag);
                row.appendChild(Memory.cell);
                
                
                
            }Memory.table.appendChild(row);
        }
        Memory.gameBoard.appendChild(Memory.table);
    }
};

window.onload = Memory.init;


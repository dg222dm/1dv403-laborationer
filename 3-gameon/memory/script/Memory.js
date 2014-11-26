"use strict";

var Memory = {
    
    memoryArray: [], //Skapa en egenskap på ditt objekt som senare kommer att referera till den utslumpade arrayen
    rows:2,
    cols: 2,
    count: 0,
    
    init:function(){
        Memory.memoryArray = RandomGenerator.getPictureArray(Memory.rows,Memory.cols); //I init-metoden anropar du arrayslumpsmetoden och sparar resultatet i egenskapen du skapade i 4an
        //skapa array objekt
        //console.log(Memory.memoryArray);
        var table = document.createElement("table");
        table.border = 2;
 
        var memory_board = document.getElementById("memory_board");
       
        for (var i = 0; i < Memory.rows; i += 1)
        {
            var row = document.createElement("tr");
            table.appendChild(row);
            console.log(Memory.memoryArray[i]+".png");
           
            for (var j = 0; j < Memory.cols; j += 1)
            {
                var cell = document.createElement("td");
                var img = document.createElement("img");
                img.src = "pics/0.png";
                cell.appendChild(img);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        memory_board.appendChild(table);
        
        
    },
    
    flipTile: function(){
        
    }
        
};

window.onload = Memory.init;


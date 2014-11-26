"use strict";

var Memory = {
    
    memory_array: [],
    
    init: function(){
        
        var rows = 4;
        var cols = 4;
        
        //Få den slumpade arrayn
        Memory.memory_array = RandomGenerator.getPictureArray(rows,cols);
        
        //Kalla på createBoard med memory arrayn
        Memory.createBoard(Memory.memory_array);
        
    },
    createBoard: function(memoryArray, rows, cols){
        
        //Skapa div tags i html dokumentet
        var newDiv = document.createElement("div");
        document.getElementsByTagName("main")[0].appendChild(newDiv);
        var innerDiv = document.createElement("div");
        newDiv.appendChild(innerDiv);
        
        //Skapa en table i html dokumentet
        var table = document.createElement("table");
        table.border = 1;
        
        //Arbeta med table. Generera cell och kolumner
        for (var i = 0; i < rows; i += 1){
            var row = document.createElement("tr");
            table.appendChild(row);
        }
        
    }
}; window.onload = Memory.init;
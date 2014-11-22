"use strict";

var MessageBoard = {
    
    init:function(){
        
        var mess = new Message("Testmeddelande", new Date());
        alert(mess); //Använder toString för utskrift
        alert(mess.getText()); // Skriver enbart ut texten.
        mess.setText("En annan text");
        alert(mess); //skriver ut meddelandet med ändrad text
        
        
    }
};

window.onload = MessageBoard.init; //Säger till webbläsaren när alla resureser är färdigladdade och refererar då till functionen i MessageBoard.  
"use strict";

var MessageBoard = {
    
    messages: [],
    
    init:function(){
        
        
        // alert(mess); //Använder toString för utskrift
        // alert(mess.getText()); // Skriver enbart ut texten.
        // mess.setText("En annan text");
        // alert(mess); //skriver ut meddelandet med ändrad text
        
        
        
        MessageBoard.messages.push(new Date());
           
        
        
    }
};

window.onload = MessageBoard.init; //Säger till webbläsaren när alla resureser är färdigladdade och refererar då till functionen i MessageBoard.  
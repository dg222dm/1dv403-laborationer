"use strict";

var MessageBoard = {
    
    messages: [],
    amountOfMessages: 0,
    init: function(){
        
        var button = document.getElementById("button");
        button.onclick = MessageBoard.createMessage;
        
    },
    
    createMessage:function(){
        
        var input = document.getElementById("textarea").value;
        
        MessageBoard.messages.push(new Message(input, new Date()));
        MessageBoard.amountOfMessages =+ 1;
        
        document.getElementById("numberOfMessages").innerHTML = "Antal Meddelanden: " + MessageBoard.amountOfMessages;

    }
};

window.onload = MessageBoard.init; //Säger till webbläsaren när alla resureser är färdigladdade och refererar då till functionen i MessageBoard.  
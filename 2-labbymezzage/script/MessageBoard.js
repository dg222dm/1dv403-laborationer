"use strict";

var MessageBoard = {
    
    messages: [],
    amountOfMessages: 0,
    init: function(){
        
        var button = document.getElementById("button");
        button.onclick = MessageBoard.createMessage;
        
        var entersend = document.getElementById("textarea");
        entersend.onkeypress=function(e){if (e.keyCode == 13 && !e.shiftKey && document.getElementById("textarea").value !== ""){
                e.preventDefault();
                MessageBoard.createMessage();
                }
                if (e.keyCode == 13 && document.getElementById("textarea").value === "")
                {e.preventDefault()}
        };
        
    },
    
    createMessage:function(){
        
        var input = document.getElementById("textarea").value; 
        
        MessageBoard.messages.push(new Message(input, new Date())); 
        
    
        document.getElementById("numberOfMessages").innerHTML = "Antal Meddelanden: " + MessageBoard.messages.length;
        MessageBoard.renderMessage(MessageBoard.messages.length-1);

    },
    
    renderMessage: function(messageID){
        
        var deleteImg = document.createElement("img");
        var timeImg = document.createElement("img");
        
        deleteImg.src = "delete.png";
        timeImg.src = "time.png";
        
        
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        
        var timeStamp = document.createElement("p");
        
        timeStamp.innerHTML = MessageBoard.messages[messageID].getDateText();
        
        messageArea.appendChild(text);
        text.appendChild(timeStamp);
        
        text.appendChild(timeImg);
        text.appendChild(deleteImg);
        
        deleteImg.className = "deleteImg";
        timeImg.className = "timeImg";
        
        deleteImg.addEventListener("click", function(e){
            if(confirm("Vill du ta bort detta meddelande?"))
            {
                
                MessageBoard.messages.splice(messageID, 1);
                document.getElementById("numberOfMessages").innerHTML = "Antal Meddelanden: "+MessageBoard.messages.length;
                MessageBoard.renderMessages();
            }

        });
        
        timeImg.addEventListener("click", function(e){
            alert(MessageBoard.messages[messageID].getDate());
        });
    },
    renderMessages: function(){
        document.getElementById("messageArea").innerHTML = "";
        
        for(var i = 0; i < MessageBoard.messages.length; i += 1){
            MessageBoard.renderMessage(i);
        }
    }
};
window.onload = MessageBoard.init;

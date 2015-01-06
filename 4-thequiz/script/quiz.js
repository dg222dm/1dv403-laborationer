"use strict";
var quizProgram = {
    
    questionTries: 0,
    arrayOfQuestions: [],

    init: function() { //Main: Should try to be as empty as possible, by just calling functions. "generell"

        quizProgram.getQuestion("http://vhost3.lnu.se:20080/question/1");

    },

    answer: function(nextURL) {
        var answer = document.getElementById("textarea");
        document.getElementById("send").onclick = function(e) {
            quizProgram.sendAnswer(nextURL, answer.value);
        };
    },

    getQuestion: function(questionURL) { // Function use: Calls the server with the url 
        var qRequest = new XMLHttpRequest();
        
        console.log(qRequest);
        
        qRequest.onreadystatechange = function() {
            if (qRequest.readyState === 4) {
                
                if (qRequest.status === 200) {
                    quizProgram.questionTries = 0;
                    quizProgram.object = JSON.parse(qRequest.responseText);
                    document.getElementById("question").innerHTML = quizProgram.object.question;
                    quizProgram.answer(quizProgram.object.nextURL);
                }
                
                if(qRequest.status === 404) {
                    var i;
                    var results = document.getElementById("results");
                    
                    for (i = 1; i < quizProgram.arrayOfQuestions.length + 1; i +=1) {
                        var p = document.createElement("p");
                            p.innerHTML = "Question Number: "+ i +" Amount of tries: " + quizProgram.arrayOfQuestions[i-1];
                            results.appendChild(p);
                        }
                }
            }
        };

        qRequest.open("GET", questionURL, true);
        qRequest.send(null);

    },

    sendAnswer: function(answerURL, answer) {

        var aRequest = new XMLHttpRequest();
        //console.log(aRequest);
        aRequest.onreadystatechange = function() {

            if (aRequest.readyState === 4) {
                
                quizProgram.testObject = JSON.parse(aRequest.responseText);
                console.log(quizProgram.testObject);
                if (aRequest.status === 200) {
                    document.getElementById("response").innerHTML = quizProgram.testObject.message;
                    quizProgram.getQuestion(quizProgram.testObject.nextURL);
                    quizProgram.questionTries += 1;
                    quizProgram.arrayOfQuestions.push(quizProgram.questionTries);
                    //console.log(quizProgram.questionTries);
                    console.log(quizProgram.arrayOfQuestions);
                    
                }
                
                if (aRequest.status === 400) {
                    
                    //console.log(quizProgram.testObject.message);
                    document.getElementById("response").innerHTML = quizProgram.testObject.message;
                    quizProgram.questionTries += 1;
                    console.log(quizProgram.questionTries);
                    console.log(quizProgram.arrayOfQuestions);
                    
                }
            }

        };

        var json = { answer: answer };
        var testString = JSON.stringify(json);

        aRequest.open("POST", answerURL, true);
        aRequest.setRequestHeader("Content-Type", "application/json");
        aRequest.send(testString);

    }
};
window.onload = quizProgram.init;

/*
Du ska skapa en applikation i vilken användaren kan svara på ett antal frågor. 
Svarar användaren rätt så tas man vidare till nästa fråga och svara man fel så får man reda på detta och får möjligheten att svara igen. 
I grundutförande ska applikationen hålla reda på,
hur många felaktiga svar man givit för varje fråga och när samtliga frågor har besvarats så ska resultatet presenteras 
där det framgår hur många försök man behövde för att klara varje fråga.

*/
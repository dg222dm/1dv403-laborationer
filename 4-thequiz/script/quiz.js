"use strict";

//Explain the Why -- Not the How -- of Your Program

var quizProgram = {

    questionTries: 0,
    arrayOfQuestionNumbers: [],
    arrayOfQuestions: [],

    init: function() { //Main

        quizProgram.getQuestion("http://vhost3.lnu.se:20080/question/1");

    },

    //Function Use: Establish contact with given server
    requestToServer: function(url, stringOrNull){

        var requestObject = new XMLHttpRequest();
        requestObject.open("GET", url, true);

        if(stringOrNull != null){
            requestObject.open("POST", url, true);
            requestObject.setRequestHeader("Content-Type", "application/json");
        }

        requestObject.send(stringOrNull);
        return(requestObject);

    },

    //Function Use: Handles user input
    getUserInput: function(url) {

        var answer = document.getElementById("textarea");

        document.getElementById("send").onclick = function(e) {

            quizProgram.sendAnswer(url, answer.value);

        };
    },

    //Function Use: Handles the object
    getQuestion: function(url) {

        var qRequest = quizProgram.requestToServer(url, null);

        //console.log(qRequest);

        qRequest.onreadystatechange = function() {

            if (qRequest.readyState === 4) {

                if (qRequest.status === 200) {

                    quizProgram.questionTries = 0;
                    quizProgram.response = JSON.parse(qRequest.responseText);
                    document.getElementById("question").innerHTML = quizProgram.response.question;
                    quizProgram.arrayOfQuestions.push(quizProgram.response.question);
                    quizProgram.getUserInput(quizProgram.response.nextURL);

                }

                if(qRequest.status === 404) {

                    var i;
                    var results = document.getElementById("results");

                    for (i = 1; i < quizProgram.arrayOfQuestions.length + 1; i += 1) {

                        var p = document.createElement("p");
                        p.innerHTML = "Question: " + quizProgram.arrayOfQuestions[i - 1] + " Amount of tries: " + quizProgram.arrayOfQuestionNumbers[i - 1];
                        results.appendChild(p);

                    }
                }
            }
        };
    },

    //Function Use: Handles the object when it comes to sending
    sendAnswer: function(url, answer) {

        var answerObject = { answer: answer };
        var responseString = JSON.stringify(answerObject);
        var aRequest = quizProgram.requestToServer(url, responseString);

        aRequest.onreadystatechange = function() {

            if (aRequest.readyState === 4) {

                var response = JSON.parse(aRequest.responseText);
                //console.log(response);

                if (aRequest.status === 200) {

                    document.getElementById("response").innerHTML = response.message;
                    quizProgram.getQuestion(response.nextURL);
                    quizProgram.questionTries += 1;
                    quizProgram.arrayOfQuestionNumbers.push(quizProgram.questionTries);

                }

                if (aRequest.status === 400) {

                    document.getElementById("response").innerHTML = response.message;
                    quizProgram.questionTries += 1;

                }
            }
        };
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
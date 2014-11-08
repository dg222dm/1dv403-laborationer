"use strict";

window.onload = function(){

	
	var birthday = function(date){
	

		var now = new Date();
		
		var birthday = date.split("-").join(",");
		
		birthday = new Date(date);
		
		console.log(now);
		console.log(birthday);
			
		
		var timeDifference = now.getTime() - birthday.getTime() ;
		
		var differentDays = (timeDifference / (1000 * 3600 * 24));
		
		differentDays %= 365;
		
		if (differentDays < 0){
			differentDays = Math.floor(differentDays);
			return Math.abs(differentDays);
		} else if (differentDays > 1){
			differentDays -= 365;
			differentDays = Math.floor(differentDays);
			return Math.abs(differentDays);
		} else {
			return Math.floor(differentDays);
		}


	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};
"use strict";

window.onload = function(){

	
	var birthday = function(date){
	

		var ONE_DAY = 86400000;  // 86400000 = 24*60*60*1000 // hours*minutes*seconds*milliseconds För att få en heldag i milisekunder.
		
		var userBirthday = new Date(date);    	//Skapa objekt med data från användaren
		var userMonth = userBirthday.getMonth(); 
		var userDay = userBirthday.getDate();
		
		var currentDate = new Date(); 			//Skapa objekt med dagens datum
		var currentYear = currentDate.getFullYear();
		var currentMonth = currentDate.getMonth();
		var currentDays = currentDate.getDate();
		
		var birthdayMonth;
		var birthdayDay;
		var birthdayYear;
		
		if(date === ""){
			throw new Error ("Ange ett datum!");
		}
		
		if(currentMonth == userMonth && userDay < currentDays){ //Ifall det är rätt månad men dagen har redan varit så ska det läggas till ett år.
		
			birthdayYear = currentYear+1;
			
		} else if (userMonth < currentMonth){
			
			 birthdayYear = currentYear+1;
		}
		else{
			
			 birthdayYear = currentYear;
		}
		
		 birthdayMonth = userMonth;
		 birthdayDay = userDay + 1;
		 
		 var birthdayObject = new Date(birthdayYear, birthdayMonth, birthdayDay); 
		 var differenceDates = Math.floor(Math.abs(birthdayObject.getTime() - currentDate.getTime())/(ONE_DAY));  //http://www.vijayjoshi.org/2008/10/24/faq-calculate-number-of-days-between-two-dates-in-javascript/
		
		return differenceDates;


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
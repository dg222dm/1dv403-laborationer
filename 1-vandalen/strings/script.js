"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
		
		var myArray = [];
	
		if (str === "")
			{
				throw new Error("Ange något!");
			}
			
		  
		  myArray = str.split("");
		  
		  for (var i = 0; i < str.length; i++) 
		  {
		  	if (myArray[i] === myArray[i].toUpperCase()) // är elementet samt typ stor bokstav 
		  	{
		  		myArray[i] = myArray[i].toLowerCase(); // elementet på i blir litenbokstav och placeras i myArray på plats [i]
		  	}
		  	else
		  	{
		  		myArray[i] = myArray[i].toUpperCase();
		  	}
		  }
			
			str = myArray.toString();
			str = str.split(/,/).join("");
			str = str.split(/[aA]/).join("#");
			return str;


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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};
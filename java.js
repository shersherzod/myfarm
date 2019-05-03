	function update() {
			document.getElementById('text').value = eggcount;
			document.title = eggcount;
		   
			//document.getElementById('ammountMultiplier').innerHTML = "Chicken Upgrade x" + (multiplier+1);
			document.getElementById('ammountMultiplier2').innerHTML = "multiply by X" + (multiplier+1);
			document.getElementById('costMultiplier').innerHTML = ((multiplier+1) * 100) + " Eggs";
			document.getElementById('currentMultiplier').innerHTML = "Current Level: X" + (multiplier);
		   
			document.getElementById('ammountAutoClick').innerHTML = autoClick;
			document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 15) + " Eggs";
		   
			document.getElementById('ammountFarms').innerHTML = farms;
			document.getElementById('costFarms').innerHTML = ((farms+1) * 75) + " Eggs";
		   
			document.getElementById('eggspersecond').innerHTML = "per second: " + (((autoClick)+(farms*2))*multiplier);
		}
	   
		var multiplier = 1;
		var eggcount = 0;
		var autoClick = 0;
		var farms = 0;
		var eggtopic = "";
		
	   
    function timer() {
        eggcount = eggcount + autoClick*multiplier;
        eggcount = eggcount + farms*2*multiplier;
        update()
    }
    setInterval(timer, 1000)
	
/*	$(document).ready(function(){
	  // localstorage
	  if (typeof(Storage) !== "undefined") {
		// Code for localStorage
		console.log("Viskas gerai");
		
		if (localStorage.topic) {
		  //already exists, second loading of the game
		  $('#content p').show();
		  $('#clicker').show();

			//Retrieve all variables
			
			eggtopic = localStorage.topic;
			eggcount = localStorage.clicks;
			autoClick = localStorage.clicks;
			farms = localStorage.clicks;
			multiplier = localStorage.clicks;
		
			
		} else {
			// first loading of the game

			// prompt for topic of your thesis
			var topic = prompt("First, you need to name your farm. What is your farm's name?",'');
			localStorage.setItem("topic", topic);
			eggtopic = topic;
			$('#topic').text(eggtopic + "'s farm").show();
			
			  //fade in messages
			$('#content .one').delay(1000).fadeIn(1000);
			$('#clicker').delay(2000).fadeIn(1000);
			
		}
			  // Put variables into the page
		  $('#topic').text(eggtopic + "'s farm");
		  
	  } else {
		// Sorry! No Web Storage support..
		console.log("No localStorage support!");
	  }
	  //end localstorage
	});
*/	
	function add() {
        eggcount = eggcount + 1
        update()
    }
	function save() {
        localStorage.setItem("eggcount", eggcount);
        localStorage.setItem("autoClick", autoClick);
        localStorage.setItem("farms", farms);
        localStorage.setItem("multiplier", multiplier);
		console.log("Saving");
  
		$('#saving-status-2').fadeIn(500).delay(4000).fadeOut(500);
	}

	  //game loop; this runs every ten seconds to do things in the game
	window.setInterval(function(){

		//You would add things here to check for new things to do, probably; all of the 'events' in your game would be triggered here
		console.log("In the game loop");

		save();
	}, 20000); //updates once per second (20000 milliseconds)
	
    function load() {
        eggcount = localStorage.getItem("eggcount");
        eggcount = parseInt(eggcount);
        autoClick = localStorage.getItem("autoClick");
        autoClick = parseInt(autoClick);
        farms = localStorage.getItem("farms");
        farms = parseInt(farms);
        multiplier = localStorage.getItem("multiplier");
        multiplier = parseInt(multiplier);        
        update()
    }
       
    function buyAutoClick() {
        if (eggcount >= ((autoClick+1) * 15)) {
            eggcount = eggcount - ((autoClick+1) * 15);
            autoClick = autoClick + 1;
            update()
        }
    }
       
    function buyFarm() {
        if (eggcount >= ((farms+1) * 75)) {
            eggcount = eggcount - ((farms+1) * 75);
            farms = farms + 1;
            update()
        }
    }
   
    function buyMultiplier() {
        if (eggcount >= ((multiplier+1) * 100)) {
            eggcount = eggcount - ((multiplier+1) * 50);
            multiplier = multiplier + 1;
            update()
        }
    }
	
	$(document).ready(function() {

	  var quotes = ["I believe in you!", "That's what she said!", "You're doing a great job!", "Make love, not war.", "Shrek is life, Shrek is love.", "It's going to be hard, but hard doesn't mean impossible."];
	  //to show default quote when starting a page
	  fetchQuote(quotes);
	  //Shows next quote when button is clicked
	  $("#clicker").click(function() {
		fetchQuote(quotes);
		$("#quoteBody").fadeOut("slow").fadeIn("slow");
	  });

	  //function to fetch and show the quote
	  function fetchQuote(q) {
		var quoteNum = Math.floor(Math.random() * quotes.length);
		$("#quoteBody").text('" ' + q[quoteNum] + ' "');
	  }
	});
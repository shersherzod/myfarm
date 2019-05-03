	function update() {
			document.getElementById('text').value = cookiecount;
			document.title = cookiecount + " Eggs";
		   
			document.getElementById('ammountMultiplier').innerHTML = "Multiplier Upgrade x" + (multiplier+1);
			document.getElementById('ammountMultiplier2').innerHTML = "x" + (multiplier+1);
			document.getElementById('costMultiplier').innerHTML = ((multiplier+1) * 100) + " Eggs";
			document.getElementById('currentMultiplier').innerHTML = "Your current Multiplier is x" + (multiplier);
		   
			document.getElementById('ammountAutoClick').innerHTML = "You Own " + autoClick + " Auto Clickers";
			document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 15) + " Eggs";
		   
			document.getElementById('ammountFarms').innerHTML = "You Own " + farms + " Farms";
			document.getElementById('costFarms').innerHTML = ((farms+1) * 75) + " Eggs";
		   
			document.getElementById('cookiespersecond').innerHTML = "You are gaining " + (((autoClick)+(farms*2))*multiplier) + " Eggs per/s";
		}
	   
		var multiplier = 1;
		var cookiecount = 0;
		var autoClick = 0;
		var farms = 0;
		var cookietopic = "";
		
	   
    function timer() {
        cookiecount = cookiecount + autoClick*multiplier;
        cookiecount = cookiecount + farms*2*multiplier;
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
			
			cookietopic = localStorage.topic;
			cookiecount = localStorage.clicks;
			autoClick = localStorage.clicks;
			farms = localStorage.clicks;
			multiplier = localStorage.clicks;
		
			
		} else {
			// first loading of the game

			// prompt for topic of your thesis
			var topic = prompt("First, you need to name your farm. What is your farm's name?",'');
			localStorage.setItem("topic", topic);
			cookietopic = topic;
			$('#topic').text(cookietopic + "'s farm").show();
			
			  //fade in messages
			$('#content .one').delay(1000).fadeIn(1000);
			$('#clicker').delay(2000).fadeIn(1000);
			
		}
			  // Put variables into the page
		  $('#topic').text(cookietopic + "'s farm");
		  
	  } else {
		// Sorry! No Web Storage support..
		console.log("No localStorage support!");
	  }
	  //end localstorage
	});
*/	
	function add() {
        cookiecount = cookiecount + 1
        update()
    }
	function save() {
        localStorage.setItem("cookiecount", cookiecount);
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
        cookiecount = localStorage.getItem("cookiecount");
        cookiecount = parseInt(cookiecount);
        autoClick = localStorage.getItem("autoClick");
        autoClick = parseInt(autoClick);
        farms = localStorage.getItem("farms");
        farms = parseInt(farms);
        multiplier = localStorage.getItem("multiplier");
        multiplier = parseInt(multiplier);        
        update()
    }
       
    function buyAutoClick() {
        if (cookiecount >= ((autoClick+1) * 15)) {
            cookiecount = cookiecount - ((autoClick+1) * 15);
            autoClick = autoClick + 1;
            update()
        }
    }
       
    function buyFarm() {
        if (cookiecount >= ((farms+1) * 75)) {
            cookiecount = cookiecount - ((farms+1) * 75);
            farms = farms + 1;
            update()
        }
    }
   
    function buyMultiplier() {
        if (cookiecount >= ((multiplier+1) * 100)) {
            cookiecount = cookiecount - ((multiplier+1) * 50);
            multiplier = multiplier + 1;
            update()
        }
    }

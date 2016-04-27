window.addEventListener("load", setUpPage);
// 
//  THIS NEEDS TO HOLD ALL THE THINGS THAT YOU NEED TO LOAD RIGHT AWAY

function setUpPage () {


// still have to search DOM for the ID
// var el = document.getElementById("header-1");
// DECLARED VARIABLES FOR ALL IDs

var xScore = document.getElementById("x-Score");
var oScore = document.getElementById("o-Score");

var playerXReady = document.getElementById("player-x-ready");
var playerOReady = document.getElementById("player-o-ready");

var playerXWins = document.getElementById("player-x-wins");
var playerOWins = document.getElementById("player-o-wins");
var tieGame = document.getElementById("tie-game");
var newGamePrompt = document.getElementById("new-game-prompt");

// 

var gameBoard = document.getElementById("game-board");
var tile11 = document.getElementById("tile-1-1");
var tile12 = document.getElementById("tile-1-2");
var tile13 = document.getElementById("tile-1-3");

var tile21 = document.getElementById("tile-2-1");
var tile22 = document.getElementById("tile-2-2");
var tile23 = document.getElementById("tile-2-3");

var tile31 = document.getElementById("tile-3-1");
var tile32 = document.getElementById("tile-3-2");
var tile33 = document.getElementById("tile-3-3");



// like a switch variable to be reassigned after each turn to the next person
var whoseTurn = "X";
//  make sure played only 9 times bc thats how many spaces there are
var moveCount = 1;
// 
// 


// loop over board-tile class to add eventListener
//  !!!!
// if there is an onclick on one of these then call the yourMove function on that element
tile11.addEventListener("click", yourMove);
tile12.addEventListener("click", yourMove);
tile13.addEventListener("click", yourMove);
tile21.addEventListener("click", yourMove);
tile22.addEventListener("click", yourMove);
tile23.addEventListener("click", yourMove);
tile31.addEventListener("click", yourMove);
tile32.addEventListener("click", yourMove);
tile33.addEventListener("click", yourMove);



// This function changes the innerhtml of the tile box into the letter of who evers turn it is, then adjust's the turn to indicate it is the next person's turn
function yourMove() {
	if (whoseTurn === "X") {
		whoseTurn = "O";
	} else if (whoseTurn === "O") {
		whoseTurn = "X";
	}
	this.removeEventListener("click", yourMove);
	this.innerHTML = whoseTurn;
//checkForWin();
	nextPlayer();
}



//  IF IT IS X'S TURN TO GO... ready message for o hidden and for x visible
function nextPlayer() {
	if (moveCount <= 9) {
		if (whoseTurn === "X") {
			playerOReady.classList = "hidden";
			playerXReady.classList = "visible";
		} else if (whoseTurn === "O") {
			playerXReady.classList = "hidden";
			playerOReady.classList = "visible";
		}
		moveCount += 1;
	} else {
		// prompt for the game message result to pop up. prsumably cats game else it would have been finished before the end? not necessarily. Well yes because the prompt for the winner comes before next player is called!
	}

}

function checkForWinner() {
	// add logic to check if the inner html of whatever winning combos match that player's letter to get a winning line and print outcome message/end game
}






  // initialize whatever variables you need and add your event listeners
  // you can (but probably shouldn't) define functions inside this function
};



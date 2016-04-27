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

var resetButton = document.getElementById('reset-button');



// like a switch variable to be reassigned after each turn to the next person
var whoseTurn = "X";
//  make sure played only 9 times bc thats how many spaces there are
var moveCount = 1;
// 
// 
// at start of game all outcome messages should be hidden!!

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


// STRING TO ASSOCIATE THE PLAYERS LETTER WITH POSITION THROUGH POSSIBLE WINNING LINE
var r1 = "";
var r2 = "";
var r3 = "";

var d1 = "";
var d2 = "";

var c1 = "";
var c2 = "";
var c3 = "";


// This function changes the innerhtml of the tile box into the letter of who evers turn it is, then adjust's the turn to indicate it is the next person's turn
function yourMove() {
	this.innerHTML = whoseTurn;


	// assigning the letter of whoseTurn to line that is possible to win at 
	if (this === tile11) {
		r1 = r1 + whoseTurn;
		c1 = c1 + whoseTurn;
		d1 = d1 + whoseTurn;
	} else if (this === tile12) {
		r1 = r1 + whoseTurn;
		c2 = c2 + whoseTurn;
	} else if (this === tile13) {
		r1 = r1 + whoseTurn;
		c3 = c3 + whoseTurn;
		d2 = d2 + whoseTurn;
	} else if (this === tile21) {
		r2 = r2 + whoseTurn;
		c1 = c1 + whoseTurn;
	} else if (this === tile22) {
		r2 = r2 + whoseTurn;
		c2 = c2 + whoseTurn;
		d1 = d1 + whoseTurn;
		d2 = d2 + whoseTurn;
	} else if (this === tile23) {
		r2 = r2 + whoseTurn;
		c3 = c3 + whoseTurn;
	} else if (this === tile31) {
		r3 = r3 + whoseTurn;
		c1 = c1 + whoseTurn;
		d2 = d2 + whoseTurn;
	} else if (this === tile32) {
		r3 = r3 + whoseTurn;
		c2 = c2 + whoseTurn;
	} else if (this === tile33) {
		r3 = r3 + whoseTurn;
		c3 = c3 + whoseTurn;
		d1 = d1 + whoseTurn;
	}

	checkForWinner();
}


function switchTurns() {
	if (whoseTurn === "X") {
		whoseTurn = "O";
	} else if (whoseTurn === "O") {
		whoseTurn = "X";
	}
	this.removeEventListener("click", yourMove);
}



//  IF IT IS X'S TURN TO GO... ready message for o hidden and for x visible, 
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
		tieGame.classList = "visible";
	}

}

function checkForWinner() {


	var winningLine = whoseTurn + whoseTurn + whoseTurn

	if (r1 === winningLine ||
		 r2 === winningLine ||
		 r3 === winningLine ||
		 d1 === winningLine ||
		 d2 === winningLine ||
		 c1 === winningLine ||
		 c2 === winningLine ||
		 c3 === winningLine) {
		 	// game ends
		 	if (whoseTurn === "X") {
		 		alert("X WON");
		 		playerXWins.classList = "visible";
		 	} else{
		 		alert("O WON");
		 		playerOWins.classList = "visible";
		 	}
		 // else move on and finish the game
	} else nextPlayer();
		switchTurns();
}

function reset() {
	
}









  // initialize whatever variables you need and add your event listeners
  // you can (but probably shouldn't) define functions inside this function
};



//------------------------VARIABLES---------------------------
let table = [        // EMPTY TIC TAC TOE TABLE 
	["-","-","-"],
	["-","-","-"],
	["-","-","-"],
];

let counter = false; // FOR LOOPING
let player = 0;      // PLAYER 1 or 2
let piece, location; // PIECE and LOCATION
let move = 0;        // FOR DRAW COUNTER



//------------------------FUNCTION---------------------------
//FUNCTION FOR INPUT 
function playerInput(){
	const prompt = require("prompt-sync")();
	
	if(player == 0){
		piece = prompt("Player 1 - Piece: ");
		location = parseInt(prompt("Player 1 - What is Location: "));
		player = 1;
	}
	else {
		piece = prompt("Player 2 - Piece: ");
		location = parseInt(prompt("Player 2 - What is Location: "));
		player = 0;
	}
    
	move = move + 1;
	

	if(location == 0){
	   table[0][0] = piece; 
	}
	else if (location == 1){
	   table[0][1] = piece; 
	}
	else if (location == 2){
	   table[0][2] = piece; 
	}
	else if (location == 3){
	   table[1][0] = piece; 
	}
	else if (location == 4){
	   table[1][1] = piece; 
	}
	else if (location == 5){
	   table[1][2] = piece; 
	}
	else if (location == 6){
	   table[2][0] = piece; 
	}
	else if (location == 7){
	   table[2][1] = piece; 
	}
	else if (location == 8){
	   table[2][2] = piece; 
	}
	else{
		console.log("Error");
	}

}


//FUNCTION TO CHECK WINNER
function checkingWinner(){ 
    //------------CHECKING ROW------------
	if(table[0][0] == table[0][1] && table[0][0] == table[0][2] && table[0][0] != "-"){
		console.log("You win");	
		counter = true;	
	} 
	else if(table[1][0] == table[1][1] && table[1][0] == table[1][2] && table[1][0] != "-"){
		console.log("You win");	
		counter = true;	
	}
	else if(table[2][0] == table[2][1] && table[2][0] == table[2][2] && table[2][0] != "-"){
		console.log("You win");	
		counter = true;		
	}


    //------------CHECKING COLUMN------------
	else if(table[0][0] == table[1][0] && table[0][0] == table[2][0] && table[0][0] != "-"){
		console.log("You win");	
		counter = true;	
	}
	else if(table[0][1] == table[1][1] && table[0][1] == table[2][1] && table[0][1] != "-"){
		console.log("You win");
		counter = true;		
	}
	else if(table[0][2] == table[1][2] && table[0][2] == table[2][2] && table[0][2] != "-"){
		console.log("You win");
		counter = true;	
	}


	//------------CHECKING DIAGONAL------------
	else if(table[0][0] == table[1][1] && table[0][0] == table[2][2] && table[0][0] != "-"){
		console.log("You win");
		counter = true;	
	}
	else if(table[0][2] == table[1][1] && table[0][2] == table[2][0] && table[0][2] != "-"){
		console.log("You win");
		counter = true;	
	}
	else{
		if(move == 9){
			console.log("Draw");
			counter = true;
		} 
		else{
		counter = false;
		}
	}
}


//FUNCTION TO DISPLAY TABLE
function displayTable(){
	console.clear()
	for(let i=0; i<table.length; i++){
		for(let j=0; j<table[i].length; j++){
			process.stdout.write(table[i][j]);
		}
			console.log("");
	}
}


//FUNCTION TO START THE APPLICATION
function startApp (){
	displayTable()
	while(counter != true){
		playerInput()
		displayTable()
		checkingWinner()
    }
}


startApp()








const startNewGame = () => {
	if (players[0].name === "" || players[1].name === "") {
		alert("Please set Player Names before starting a New Game !!");
		return;
	}

	resetGame();

	activePlayerName.textContent = players[activePlayer].name;
	gameBoard.style.display = "block";
};

const switchPlayer = () => {
	if (activePlayer === 0) {
		activePlayer = 1;
	} else {
		activePlayer = 0;
	}
	activePlayerName.textContent = players[activePlayer].name;
};

const selectGameField = (event) => {
	if (event.target.tagName !== "LI") {
		return;
	}
	let selectedField = event.target;

	const selectedCol = +selectedField.dataset.col - 1;
	const selectedRow = +selectedField.dataset.row - 1;

	if (gameData[selectedRow][selectedCol] > 0) {
		alert("Please select empty Cell");
		return;
	}

	selectedField.textContent = players[activePlayer].symbol;
	selectedField.classList.add("disabled");

	gameData[selectedRow][selectedCol] = activePlayer + 1;
	// console.log(gameData);

	const winnerID = checkGameOver();

	if (winnerID !== 0) {
		finishGame(winnerID);
	}
	console.log(winnerID);

	currentRound++;

	switchPlayer();
};

const checkGameOver = () => {
	// check if row is winner
	for (let i = 0; i < 3; i++) {
		if (gameData[i][0] >= 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]) {
			// console.log(gameData[i][0]);
			return gameData[i][0];
		}
	}
	// check if column is winner
	for (let i = 0; i < 3; i++) {
		if (gameData[0][i] >= 0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i]) {
			// console.log(gameData[0][i]);
			return gameData[0][i];
		}
	}

	// if cross 3 lines are same symbol
	if (gameData[0][0] >= 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
		return gameData[0][0];
	} else if (gameData[2][0] >= 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]) {
		return gameData[2][0];
	}

	if (currentRound === 9) {
		return -1;
	}
	return 0;
};

/* const checkGameOver = () => {
	if (gameData[0][0] >= 0 && gameData[0][0] === gameData[0][1] && gameData[0][1] === gameData[0][2]) {
		console.log("Game Over");
	} else if (gameData[0][0] >= 0 && gameData[1][0] === gameData[1][1] && gameData[1][1] === gameData[1][2]) {
		console.log("Game Over");
	} else if (gameData[0][0] >= 0 && gameData[2][0] === gameData[2][1] && gameData[2][1] === gameData[2][2]) {
		console.log("Game Over");
	}
}; */

finishGame = (winnerID) => {
	gameInfo.style.display = "block";

	if (winnerID > 0) {
		winningPlayer.textContent = players[winnerID - 1].name;
		turnPlayer.style.display = "none";
		return;
	} else {
		gameInfo.firstElementChild.textContent = "Its a Draw ! ";
		turnPlayer.style.display = "none";
	}
};

const resetGame = () => {
	activePlayer = 0;
	currentRound = 1;
	// gameInfo.firstElementChild.innerHTML = "<h3>Winner is<br /><span id=winner-player>Player Name</span></h3>";
	gameInfo.style.display = "none";

	let gameBoardIndex = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			gameData[i][j] = 0;
			const gameIndex = gameArea.children[gameBoardIndex];
			gameIndex.textContent = "";
			gameIndex.classList.remove("disabled");
			gameBoardIndex++;
		}
	}
	turnPlayer.style.display = "block";
};

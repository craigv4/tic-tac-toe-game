const startNewGame = () => {
	if (players[0].name === "" || players[1].name === "") {
		alert("Please set Player Names before starting a New Game !!");
		return;
	}
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
	console.log(gameData);

	switchPlayer();
};

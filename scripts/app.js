let gameData = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1

const players = [
	{
		name: "",
		symbol: "X",
	},
	{
		name: "",
		symbol: "O",
	},
];

const configOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

const player1EditButton = document.getElementById("edit-player-1-btn");
const player2EditButton = document.getElementById("edit-player-2-btn");
const cancelPlayerEdit = document.getElementById("cancel-player-edit");
const startGameButton = document.getElementById("start-game");

const formElement = document.querySelector("form");
const errorText = document.getElementById("error-text");
const activePlayerName = document.getElementById("active-player-name");

const turnPlayer = document.querySelector("#active-game > p")
const gameInfo = document.getElementById("game-info");
const winningPlayer = document.getElementById("winner-player")

player1EditButton.addEventListener("click", openEditOverlay);
player2EditButton.addEventListener("click", openEditOverlay);

cancelPlayerEdit.addEventListener("click", closeEditOverlay);
backdrop.addEventListener("click", closeEditOverlay);

formElement.addEventListener("submit", updatePlayerName);

startGameButton.addEventListener("click", startNewGame);

const gameBoard = document.getElementById("active-game");
// const gameFields = document.querySelectorAll("#game-board li");
const gameArea = document.getElementById("game-board");

// for (const gameField of gameFields) {
// 	gameField.addEventListener("click", selectGameField);
// }

gameArea.addEventListener("click", selectGameField);

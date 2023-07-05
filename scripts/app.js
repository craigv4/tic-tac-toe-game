let editedPlayer = 0;

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


const formElement = document.querySelector("form");
const errorText = document.getElementById("error-text");

player1EditButton.addEventListener("click", openEditOverlay);
player2EditButton.addEventListener("click", openEditOverlay);

cancelPlayerEdit.addEventListener("click", closeEditOverlay);
backdrop.addEventListener("click", closeEditOverlay);

formElement.addEventListener("submit", updatePlayerName);

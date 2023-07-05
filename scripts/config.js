const openEditOverlay = (event) => {
	editedPlayer = +event.target.dataset.playerid; // adding `+` in front of will convert the string to a number
	backdrop.style.display = "block";
	configOverlay.style.display = "block";
};

const closeEditOverlay = () => {
	backdrop.style.display = "none";
	configOverlay.style.display = "none";
	formElement.firstElementChild.classList.remove("error");
	errorText.textContent = "";
};

const updatePlayerName = (event) => {
	event.preventDefault(); // Prevents form submission
	const formData = new FormData(event.target);
	const playerName = formData.get("player-name").trim(); // Remove whitespace eg. => "   some name     " will return "some name"

	if (!playerName) {
		// playerName === "", checks if playerName is empty string
		errorText.textContent = "Player name is invalid";
		formElement.firstElementChild.classList.add("error");
		return;
	}

	const selectedPlayerElement = document.getElementById("player-data-" + editedPlayer);
	selectedPlayerElement.children[1].textContent = playerName;

	players[editedPlayer - 1].name = playerName;

	closeEditOverlay();
	formElement.firstElementChild.lastElementChild.value = "";
};

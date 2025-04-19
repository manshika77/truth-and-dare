let originalPlayers = [];
let shuffledPlayers = [];

function startGame() {
  const input = document.getElementById("players").value.trim();
  originalPlayers = input.split("\n").map(name => name.trim()).filter(name => name !== "");

  if (originalPlayers.length < 2) {
    alert("Please enter at least 2 player names.");
    return;
  }

  shufflePlayers();
  document.querySelector(".player-input").classList.add("hidden");
  document.querySelector(".gameplay").classList.remove("hidden");
}

function shufflePlayers() {
  shuffledPlayers = [...originalPlayers];
  for (let i = shuffledPlayers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPlayers[i], shuffledPlayers[j]] = [shuffledPlayers[j], shuffledPlayers[i]];
  }
}

function playRound() {
  if (shuffledPlayers.length === 0) {
    shufflePlayers(); // New round
  }

  const randomPlayer = shuffledPlayers.pop(); // Get one and remove from the list
  const choice = Math.random() < 0.5 ? "Truth" : "Dare";

  const resultText = `${randomPlayer}, you got: 🔥 ${choice}!`;
  document.getElementById("resultDisplay").textContent = resultText;
}
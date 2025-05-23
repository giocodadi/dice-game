function rollDice() {
  const diceImages = [
    "img/dice1.png",
    "img/dice2.png",
	"img/dice3.png",
    "img/dice4.png",
    "img/dice5.png",
    "img/dice6.png"
  
  ];

  const combos = [
    [4, 4],
    [2, 6],
    [6, 2],
    [3, 5],
    [5, 3]
  ];

  const [die1, die2] = combos[Math.floor(Math.random() * combos.length)];

  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");

  // Animazione
  dice1.classList.add("rolling");
  dice2.classList.add("rolling");


  setTimeout(() => {
    dice1.src = diceImages[die1 - 1];
    dice2.src = diceImages[die2 - 1];

    document.getElementById("sum").textContent = die1 + die2;

    dice1.classList.remove("rolling");
    dice2.classList.remove("rolling");
  }, 300);
}

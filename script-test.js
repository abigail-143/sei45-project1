// main card deck for game play //
const cardDeck = [
  { food: "nasi", value: 1, image: "./cards/nasi1.png" },
  { food: "nasi", value: 1, image: "./cards/nasi1.png" },
  { food: "nasi", value: 1, image: "./cards/nasi1.png" },
  { food: "nasi", value: 2, image: "./cards/nasi2.png" },
  { food: "nasi", value: 2, image: "./cards/nasi2.png" },
  { food: "nasi", value: 2, image: "./cards/nasi2.png" },
  { food: "nasi", value: 3, image: "./cards/nasi3.png" },
  { food: "nasi", value: 3, image: "./cards/nasi3.png" },
  { food: "nasi", value: 3, image: "./cards/nasi3.png" },
  { food: "nasi", value: 4, image: "./cards/nasi4.png" },
  { food: "nasi", value: 4, image: "./cards/nasi4.png" },
  { food: "nasi", value: 4, image: "./cards/nasi4.png" },
  { food: "nasi", value: 5, image: "./cards/nasi5.png" },
  { food: "nasi", value: 5, image: "./cards/nasi5.png" },
  { food: "burger", value: 1, image: "./cards/burger1.png" },
  { food: "burger", value: 1, image: "./cards/burger1.png" },
  { food: "burger", value: 1, image: "./cards/burger1.png" },
  { food: "burger", value: 2, image: "./cards/burger2.png" },
  { food: "burger", value: 2, image: "./cards/burger2.png" },
  { food: "burger", value: 2, image: "./cards/burger2.png" },
  { food: "burger", value: 3, image: "./cards/burger3.png" },
  { food: "burger", value: 3, image: "./cards/burger3.png" },
  { food: "burger", value: 3, image: "./cards/burger3.png" },
  { food: "burger", value: 4, image: "./cards/burger4.png" },
  { food: "burger", value: 4, image: "./cards/burger4.png" },
  { food: "burger", value: 4, image: "./cards/burger4.png" },
  { food: "burger", value: 5, image: "./cards/burger5.png" },
  { food: "burger", value: 5, image: "./cards/burger5.png" },
  { food: "donut", value: 1, image: "./cards/donut1.png" },
  { food: "donut", value: 1, image: "./cards/donut1.png" },
  { food: "donut", value: 1, image: "./cards/donut1.png" },
  { food: "donut", value: 2, image: "./cards/donut2.png" },
  { food: "donut", value: 2, image: "./cards/donut2.png" },
  { food: "donut", value: 2, image: "./cards/donut2.png" },
  { food: "donut", value: 3, image: "./cards/donut3.png" },
  { food: "donut", value: 3, image: "./cards/donut3.png" },
  { food: "donut", value: 3, image: "./cards/donut3.png" },
  { food: "donut", value: 4, image: "./cards/donut4.png" },
  { food: "donut", value: 4, image: "./cards/donut4.png" },
  { food: "donut", value: 4, image: "./cards/donut4.png" },
  { food: "donut", value: 5, image: "./cards/donut5.png" },
  { food: "donut", value: 5, image: "./cards/donut5.png" },
  { food: "ramen", value: 1, image: "./cards/ramen1.png" },
  { food: "ramen", value: 1, image: "./cards/ramen1.png" },
  { food: "ramen", value: 1, image: "./cards/ramen1.png" },
  { food: "ramen", value: 2, image: "./cards/ramen2.png" },
  { food: "ramen", value: 2, image: "./cards/ramen2.png" },
  { food: "ramen", value: 2, image: "./cards/ramen2.png" },
  { food: "ramen", value: 3, image: "./cards/ramen3.png" },
  { food: "ramen", value: 3, image: "./cards/ramen3.png" },
  { food: "ramen", value: 3, image: "./cards/ramen3.png" },
  { food: "ramen", value: 4, image: "./cards/ramen4.png" },
  { food: "ramen", value: 4, image: "./cards/ramen4.png" },
  { food: "ramen", value: 4, image: "./cards/ramen4.png" },
  { food: "ramen", value: 5, image: "./cards/ramen5.png" },
  { food: "ramen", value: 5, image: "./cards/ramen5.png" },
];

const player1 = {
  name: "",
  tableCards: [
    { food: "burger", value: 3, image: "./cards/burger3.png" },
    { food: "burger", value: 4, image: "./cards/burger4.png" },
    { food: "nasi", value: 1, image: "./cards/nasi1.png" },
    { food: "nasi", value: 2, image: "./cards/nasi2.png" },
  ],
  hiddenDeck: [
    { food: "ramen", value: 4, image: "./ramen4.png" },
    { food: "ramen", value: 4, image: "./ramen4.png" },
    { food: "ramen", value: 5, image: "./ramen5.png" },
    { food: "ramen", value: 5, image: "./ramen5.png" },
  ],
  score: 0,
};

const player2 = {
  name: "",
  tableCards: [
    { food: "ramen", value: 1, image: "./cards/ramen1.png" },
    { food: "ramen", value: 1, image: "./cards/ramen1.png" },
    { food: "ramen", value: 1, image: "./cards/ramen1.png" },
  ],
  hiddenDeck: [],
  score: 0,
};

const player3 = {
  name: "",
  tableCards: [
    { food: "burger", value: 1, image: "./cards/burger1.png" },
    { food: "burger", value: 1, image: "./cards/burger1.png" },
    { food: "burger", value: 1, image: "./cards/burger1.png" },
  ],
  hiddenDeck: [
    { food: "nasi", value: 1, image: "./cards/nasi1.png" },
    { food: "nasi", value: 1, image: "./cards/nasi1.png" },
    { food: "burger", value: 1, image: "./cards/burger1.png" },
    { food: "burger", value: 1, image: "./cards/burger1.png" },
  ],
  score: 0,
};

const player4 = {
  name: "",
  tableCards: [
    { food: "nasi", value: 1, image: "./cards/nasi1.png" },
    { food: "nasi", value: 1, image: "./cards/nasi1.png" },
    { food: "nasi", value: 1, image: "./cards/nasi1.png" },
    { food: "donut", value: 5, image: "./cards/donut5.png" },
  ],
  hiddenDeck: [
    { food: "burger", value: 1, image: "./cards/burger1.png" },
    { food: "burger", value: 1, image: "./cards/burger1.png" },
    { food: "burger", value: 1, image: "./cards/burger1.png" },
    { food: "burger", value: 1, image: "./cards/burger1.png" },
  ],
  score: 0,
};

// const tableDeckCards = {
//   player1: [],
//   player2: [],
//   player3: [],
//   player4: [],
// };

// function openCard(user) {
//   let x = user.hiddenDeck.pop();
//   tableDeckCards.user.push(x);
// }

// function openCard(user) {
//   user.tableCards.push(user.hiddenDeck.pop());
// }

// openCard(player1);
// console.log(player1);

function shuffleCardDeck(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function countValue(array) {
  let counts = array.reduce((prev, curr) => {
    let count = prev.get(curr.food) || 0;
    prev.set(curr.food, curr.value + count);
    return prev;
  }, new Map());

  let tableCounts = [...counts].map(([key, value]) => {
    return { key, value };
  }); // this will give an array of objects that will have the food and their summed value as the key/value pairs //

  for (let i = 0; i < tableCounts.length; i++) {
    if (tableCounts[i].value == 5) {
      console.log("yes");
      return 1;
    } else {
      console.log("no");
      return 0;
    } // this is to check if there's a count of "5" for any food cards on the table //
  }
}

function checkTableCardsValue() {
  if (selectedItem == "2") {
    if (player2.tableCards.length == 0) {
      // to check when only player1 has opened card but not player2
      let currentTableCards = [player1.tableCards[0]];
      // countValue(currentTableCards);
      return countValue(currentTableCards);
    } else {
      let currentTableCards = [];
      currentTableCards.push(
        player1.tableCards[player1.tableCards.length - 1],
        player2.tableCards[player2.tableCards.length - 1]
      );
      countValue(currentTableCards);
    }
  }
}

let selectedItem = "2";
let x = checkTableCardsValue();
console.log(x);

// let x = checkCardsValue(player1.tableCards)
// console.log(x)

// this is to acticate the snatch color //
function snatchAlert() {
  window.addEventListener("keydown", (event) => {
    if (selectedItem == "2") {
      if (event.key == "z") {
        document.getElementById("2p-p1-snatch").classList.add("snatch");
        checkTableCardsValue();
        return event.key;
      }
      if (event.key == "/") {
        document.getElementById("2p-p2-snatch").classList.add("snatch");
        checkTableCardsValue();
        return event.key;
      }
    }
    if (selectedItem == "3") {
      if (event.key == "q") {
        document.getElementById("3p-p1-snatch").classList.add("snatch");
      }
      if (event.key == "p") {
        document.getElementById("3p-p2-snatch").classList.add("snatch");
      }
      if (event.key == "/") {
        document.getElementById("3p-p3-snatch").classList.add("snatch");
      }
    }
    if (selectedItem == "4") {
      if (event.key == "q") {
        document.getElementById("4p-p1-snatch").classList.add("snatch");
      }
      if (event.key == "p") {
        document.getElementById("4p-p2-snatch").classList.add("snatch");
      }
      if (event.key == "z") {
        document.getElementById("4p-p3-snatch").classList.add("snatch");
      }
      if (event.key == "/") {
        document.getElementById("4p-p4-snatch").classList.add("snatch");
      }
    }
  });
}

// player1.hiddenDeck = player1.hiddenDeck.concat(player2.tableCards, player1.tableCards)
// shuffleCardDeck(player1.hiddenDeck)
// player2.tableCards = []
// player1.tableCards = []
// console.log(player1.hiddenDeck)
// console.log(player2.tableCards)
// console.log(player1.tableCards)

player3.hiddenDeck.push(player4.hiddenDeck.pop());
shuffleCardDeck(player3.hiddenDeck);
console.log(player3.hiddenDeck);
console.log(player4.hiddenDeck);

// checkCardValue
if (selectedItem == "2") {
  if (player2.tableCards.length == 0) {
    // to catch when only player1 has open card but not player2 //
    let currentTableCards = [player1.tableCards[0]];
    countValue(currentTableCards);
  }
  if (player1.tableCards.length == 0) {
    let currentTableCards = [player2.tableCards[0]];
    countValue(currentTableCards);
  } else {
    let currentTableCards = [];
    currentTableCards.push(
      player1.tableCards[player1.tableCards.length - 1],
      player2.tableCards[player2.tableCards.length - 1]
    );
    countValue(currentTableCards);
  }
}

//snatchkeypressed
if (selectedItem == "2") {
  if (event.key == "z") {
    document.getElementById("2p-p1-snatch").classList.add("snatch");
    snatchKeyPressed = "z";
    checkTableCardsValue();
    awardCards();
  }
  if (event.key == "/") {
    document.getElementById("2p-p2-snatch").classList.add("snatch");
    snatchKeyPressed = "/";
    checkTableCardsValue();
    awardCards();
  }
}

//awardcards
if (selectedItem == "2") {
  // if player1 snatched (check key pressed?) and if checkTableCardsValue has a 5
  if (snatchKeyPressed === "z" && allowSnatch === "yes") {
    player1.hiddenDeck = player1.hiddenDeck.concat(
      player1.tableCards,
      player2.tableCards
    );
    shuffleCardDeck(player1.hiddenDeck);
    player1.tableCards = [];
    player2.tableCards = [];
    document.getElementById("2p-p1-opencard").src = "./cards/card.png";
    document.getElementById("2p-p2-opencard").src = "./cards/card.png";
  }
  // if player1 snatched and if checkTableCardsValue does not have a 5
  if (snatchKeyPressed == "z" && allowSnatch == "no") {
    console.log("player1 snatch NOT successful");
    player2.hiddenDeck.push(player1.hiddenDeck.pop());
    shuffleCardDeck(player2.hiddenDeck);
  }
  // if player2 snatched and if checkTableCardsValue has a 5
  if (snatchKeyPressed == "/" && allowSnatch == "yes") {
    player2.hiddenDeck = player2.hiddenDeck.concat(
      player1.tableCards,
      player2.tableCards
    );
    shuffleCardDeck(player2.hiddenDeck);
    player1.tableCards = [];
    player2.tableCards = [];
    document.getElementById("2p-p1-opencard").src = "./cards/card.png";
    document.getElementById("2p-p2-opencard").src = "./cards/card.png";
  }
  // if player2 snatched and if checkTableCardsValue does not have a 5
  if (snatchKeyPressed == "/" && allowSnatch == "no") {
    player1.hiddenDeck.push(player2.hiddenDeck.pop());
    shuffleCardDeck(player1.hiddenDeck);
  }
  // wrap the above in their respective "if"s then
  updateScore(player1);
  updateScore(player2);
  allowSnatch = "no";
  setTimeout(() => {
    document.getElementById("2p-p1-snatch").classList.remove("snatch");
    document.getElementById("2p-p2-snatch").classList.remove("snatch");
  }, 200);
}
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
    // { food: "burger", value: 1, image: "./cards/burger1.png" },
    // { food: "burger", value: 1, image: "./cards/burger1.png" },
    // { food: "burger", value: 1, image: "./cards/burger1.png" },
  ],
  hiddenDeck: [],
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
  hiddenDeck: [],
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

function checkTableCardsValue() {
  if (selectedItem == "2") {
    let currentTableCards = [];
    currentTableCards.push(
      player1.tableCards[player1.tableCards.length - 1],
      player2.tableCards[player2.tableCards.length - 1]
      //   player3.tableCards[player3.tableCards.length - 1],
      //   player4.tableCards[player4.tableCards.length - 1]
    );
    let counts = currentTableCards.reduce((prev, curr) => {
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
      } else {
        console.log("no");
      } // this is to check if there's a count of "5" for any food cards on the table //
    }
  }
}

let selectedItem = "2";
checkTableCardsValue();

// let x = checkCardsValue(player1.tableCards)
// console.log(x)

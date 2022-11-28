document.addEventListener("DOMContentLoaded", () => {
  // create array to hold our images and the names of those images
  const cardArray = [
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ]

  // randomize cards
  cardArray.sort(() => 0.5 - Math.random());

  // selecting our grid/results and setting up empty arrays to hold future values
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];


  // creating gameboard
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }


  // checking for card matches

  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    // check to see if user clicks on same image
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("you have clicked the same image");
    }
    // if user clicks on two identical images
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert("you found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      // if user selects wrong combination
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, try again.");
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations, you found them all!"
    }
  }


   function flipCard() {
    // getting the data ID attributes we created in the function above
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard()
});

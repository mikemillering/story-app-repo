import { useState, useEffect } from "react";
import DrawButtons from "./components/DrawButtons";
//import PlayerDisplay from "./components/PlayerDisplay";
import "./Index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerDisplay from "./components/PlayerDisplay";

function App() {
  const [deck, setDeck] = useState<string[]>([]);
  const [playerHand, setPlayerHand] = useState<string[]>([]);
  const [playerHandValue, setPlayerHandValue] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerHand, setDealerHand] = useState<string[]>([]);
  const [dealerHandValue, setDealerHandValue] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [message, setMessage] = useState("Welcome To BlackJack!");

  useEffect(() => {
    setDeck(shuffledDeck());
  }, []);

  const suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
  const values = [
    "Ace",
    "King",
    "Queen",
    "Jack",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];

  let buildDeck = suits.flatMap((suit) =>
    values.map((card) => `${card} of ${suit}`)
  );

  function shuffledDeck() {
    let shuffledDeck = buildDeck.sort(() => Math.random() - 0.5);
    return shuffledDeck;
  }

  function test() {
    draw(setPlayerHand, setPlayerHandValue);
  }

  function testTwo() {
    draw(setDealerHand, setDealerHandValue);
  }

  function dealCards() {
    let tempDeck = [...deck];
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        if (i % 2 === 0) {
          let newCard = tempDeck.splice(i, 1)[0];
          setPlayerHand((prev) => [...prev, newCard]);
          let cardValue = getValue(newCard);
          setPlayerHandValue((prev) => prev + cardValue);
          setDeck([...tempDeck]);
        } else {
          let newCard = tempDeck.splice(i, 1)[0];
          setDealerHand((prev) => [...prev, newCard]);
          let cardValue = getValue(newCard);
          setDealerHandValue((prev) => prev + cardValue);
          setDeck([...tempDeck]);
        }
      }, i * 300);
    }
  }

  function draw(setHand, setHandValue) {
    let tempDeck = [...deck];
    let newCard = tempDeck.splice(0, 1)[0];
    setHand((prev) => [...prev, newCard]);
    let cardValue = getValue(newCard);
    setHandValue((prev) => prev + cardValue);
    setDeck([...tempDeck]);
    console.log(deck);
  }

  function getValue(card) {
    let value = 0;
    let firstOfCard = card.slice(0, 1);
    switch (firstOfCard) {
      case "A":
        value = 1;
        break;
      case "9":
        value = 9;
        break;
      case "8":
        value = 8;
        break;
      case "7":
        value = 7;
        break;
      case "6":
        value = 6;
        break;
      case "5":
        value = 5;
        break;
      case "4":
        value = 4;
        break;
      case "3":
        value = 3;
        break;
      case "2":
        value = 2;
        break;
      default:
        value = 10;
    }
    return value;
  }

  function dealerDrawUp() {
    while (
      dealerHandValue <= playerHandValue &&
      playerHandValue <= 21 &&
      dealerHandValue <= 18
    ) {
      setTimeout(() => {}
      draw(setDealerHand, setDealerHandValue);
    }, 1000)
    }
  }

  return (
    <div className="wrapper">
      <div className="container dark">
        <div className="row">
          <div>Your Score: {playerScore}</div>
          <div className="container">Dealer Score: {dealerScore}</div>
          <div className="col-6 offset-3">
            <div className="message-container">
              <p>{playerScore}</p>
            </div>
          </div>
          <div className="col-3 offset-3">
            <div className="message-container">
              You are at {playerHandValue}
            </div>
          </div>
          <div className="col-3">
            <div className="message-container">
              Dealer is at {dealerHandValue}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <DrawButtons test={test} testTwo={testTwo} />
          </div>
          <div className="col-3 offset-1">
            <div className="card-container player-display">
              <PlayerDisplay hand={playerHand} />
            </div>
          </div>

          <div className="col-3">
            <div className="card-container player-display">
              <PlayerDisplay hand={dealerHand} />
            </div>
          </div>
          <button className="btn" onClick={dealCards}>
            deal
          </button>
          <button className="btn" onClick={dealerDrawUp}>
            dealer draw
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /*

*/
}

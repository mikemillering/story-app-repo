import { useState, useEffect } from "react";
import DrawButtons from "./components/DrawButtons";
import PlayerDisplay from "./components/PlayerDisplay";
import "./Index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [deck, setDeck] = useState<string[]>([]);
  const [playerHand, setPlayerHand] = useState<string[]>([]);
  const [playerHandValue, setPlayerHandValue] = useState(0);
  const [dealerHand, setDealerHand] = useState<string[]>([]);
  const [dealerHandValue, setDealerHandValue] = useState(0);
  const [message, setMessage] = useState("Welcome To BlackJack!");

  useEffect(() => {
    initializeDeck();
  }, []);

  useEffect(() => {
    dealerHandValue === 0 ? dealerDrawTwo : null;
  }, [playerHand]);

  const suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
  const values = {
    Ace: 1,
    King: 10,
    Queen: 10,
    Jack: 10,
    "10": 10,
    "9": 9,
    "8": 8,
    "7": 7,
    "6": 6,
    "5": 5,
    "4": 4,
    "3": 3,
    "2": 2,
  };

  {
    /* Dealer Function */
  }

  const dealerDraw = () => {
    let randNum = Math.floor(Math.random() * deck.length);
    const newDeck = [...deck];
    const newCard = newDeck[randNum];
    const newCardValue = values[newCard.split(" ")[0]];
    setDealerHandValue((prev) => prev + newCardValue);
    if (playerHandValue + newCardValue > 21) {
      setDealerHand([...playerHand, newCard]);
      setMessage(
        `Dealer Busted! They ended up with ${dealerHandValue + newCardValue}`
      );
    } else {
      setDealerHand([...playerHand, newCard]);
      newDeck.splice(randNum, 1);
      setDeck([...newDeck]);
    }
  };

  const dealerDrawTwo = () => {
    let randNumOne = Math.floor(Math.random() * deck.length);
    let randNumTwo = Math.floor(Math.random() * (deck.length - 1));
    if (randNumTwo >= randNumOne) randNumTwo++;
    const newDeck = [...deck];
    const newCardOne = newDeck[randNumOne];
    const newCardTwo = newDeck[randNumTwo];
    const totalCardValue =
      values[newCardOne.split(" ")[0]] + values[newCardTwo.split(" ")[0]];
    setDealerHandValue((prev) => prev + totalCardValue);
    setDealerHand([...dealerHand, newCardOne, newCardTwo]);
    newDeck.splice(randNumOne, 1);
    newDeck.splice(randNumTwo < randNumOne ? randNumTwo : randNumTwo - 1, 1);
    setDeck([...newDeck]);
  };

  {
    /* Player Functions */
  }

  const draw = () => {
    let randNum = Math.floor(Math.random() * deck.length);
    const newDeck = [...deck];
    const newCard = newDeck[randNum];
    const newCardValue = values[newCard.split(" ")[0]];
    setPlayerHandValue((prev) => prev + newCardValue);
    if (playerHandValue + newCardValue > 21) {
      setPlayerHand([...playerHand, newCard]);
      setMessage(`You Busted! You are at ${playerHandValue + newCardValue}`);
    } else {
      setPlayerHand([...playerHand, newCard]);
      newDeck.splice(randNum, 1);
      setDeck([...newDeck]);
    }
  };

  const drawTwo = () => {
    let randNumOne = Math.floor(Math.random() * deck.length);
    let randNumTwo = Math.floor(Math.random() * (deck.length - 1));
    if (randNumTwo >= randNumOne) randNumTwo++;
    const newDeck = [...deck];
    const newCardOne = newDeck[randNumOne];
    const newCardTwo = newDeck[randNumTwo];
    const totalCardValue =
      values[newCardOne.split(" ")[0]] + values[newCardTwo.split(" ")[0]];
    setPlayerHandValue((prev) => prev + totalCardValue);
    setPlayerHand([...playerHand, newCardOne, newCardTwo]);
    newDeck.splice(randNumOne, 1);
    newDeck.splice(randNumTwo < randNumOne ? randNumTwo : randNumTwo - 1, 1);
    setDeck([...newDeck]);
  };

  {
    /* Other Functions */
  }

  const initializeDeck = () => {
    const getDeck: { [key: string]: number } = [];
    for (const suit of suits) {
      for (const value in values) {
        const cardName = `${value} of ${suit}`;
        getDeck.push(cardName);
      }
    }
    setDeck(getDeck);
  };

  const stay = () => {
    if (dealerHandValue < 15) {
      do {
        dealerDraw();
        //setDealerHandValue((prev) => prev + 1);
      } while (dealerHandValue > 17);
    } else {
      getNewHand();
    }
  };

  const getNewHand = () => {
    setPlayerHand([]);
    setPlayerHandValue(0);
    setDealerHand([]);
    setDealerHandValue(0);
    initializeDeck();
    setMessage("Welcome To BlackJack!");
  };

  return (
    <div className="wrapper">
      <div className="container dark">
        <div className="row">
          {" "}
          <div className="col-6 offset-3">
            <div className="message-container">
              <p>{message}</p>
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
            <DrawButtons
              draw={draw}
              drawTwo={drawTwo}
              getNewHand={getNewHand}
              handValue={playerHandValue}
              dealerDrawTwo={dealerDrawTwo}
              stay={stay}
            />
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
        </div>
        <button className="btn btn-dark" onClick={dealerDrawTwo}>
          Dealer Hand
        </button>
      </div>
    </div>
  );
}

export default App;

{
  /*

*/
}

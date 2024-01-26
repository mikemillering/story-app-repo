import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [deck, setDeck] = useState<string[]>([]);
  const [hand, setHand] = useState("");
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
    "1",
  ];

  const newDeck = suits.flatMap((suit) =>
    values.map((value) => `${value} of ${suit}`)
  );

  const newHand = () => {
    let randomNum = Math.round(Math.random() * 51);
    let removedCard = newDeck.splice(randomNum);
    let newCard = removedCard[0];
    let newHand = [...hand];
    newHand.push(newCard.toString());
    setHand(newHand);
    console.log(hand);
  };

  return (
    <div className="container">
      <button onClick={newHand}>console log</button>
      {hand}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

function App() {
  const [deck, setDeck] = useState<string[]>([]);
  const [hand, setHand] = useState<string[]>([]);
  const [handValue, setHandValue] = useState(0);
  const [message, setMessage] = useState("You are at : 0");

  useEffect(() => {
    initializeDeck();
  }, []);

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

  const draw = () => {
    let randNum = Math.floor(Math.random() * deck.length);
    const newDeck = [...deck];
    const newCard = newDeck[randNum];
    const newCardValue = values[newCard.split(" ")[0]];
    setHandValue((prev) => prev + newCardValue);
    if (handValue + newCardValue > 21) {
      setHand([...hand, newCard]);
      setMessage(`you busted, total hand value is ${handValue + newCardValue}`);
    } else {
      setMessage("You are at: " + (handValue + newCardValue));
      setHand([...hand, newCard]);
      newDeck.splice(randNum, 1);
      setDeck([...newDeck]);
    }
  };

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

  const getNewHand = () => {
    setMessage("You are at: 0");
    setHand([]);
    setHandValue(0);
    initializeDeck();
  };

  return (
    <div className="container">
      <div className="row">
        <div id="disp" className="col">
          {message}
        </div>
        <div className="col">
          {handValue > 21 ? (
            <button onClick={getNewHand}>getNewHand</button>
          ) : (
            <button onClick={draw}>draw</button>
          )}
          {hand.map((card, index) => (
            <div key={index}>{card}</div>
          ))}
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

import React from "react";
import "../Index.css";

export default function buttonFunction(props: any) {
  let drawButton = <></>;
  if (props.handValue === 0) {
    drawButton = (
      <button className="btn btn-light btn-lg" onClick={props.drawTwo}>
        Get the first hand
      </button>
    );
  } else if (props.handValue > 21) {
    drawButton = (
      <button className="btn btn-dark btn-lg" onClick={props.getNewHand}>
        Start next round
      </button>
    );
  } else {
    drawButton = (
      <button className="btn btn-success btn-lg" onClick={props.draw}>
        Hit
      </button>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {drawButton}
          {props.handValue === 0 || props.handValue > 21 ? null : (
            <button className="btn btn-danger btn-lg" onClick={props.stay}>
              Stay
            </button>
          )}
        </div>
      </div>
    </>
  );
}

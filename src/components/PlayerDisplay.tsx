import React from "react";
import "../Index.css";

export default function PlayerDisplay(props: any) {
  return (
    <>
      <div>
        {props.hand.map((card, index) => (
          <p key={index}>{card}</p>
        ))}
      </div>
    </>
  );
}

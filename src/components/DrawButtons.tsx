import React from "react";
import "../Index.css";

export default function buttonFunction(props: any) {
  return (
    <>
      <div className="container">
        {props.buttonCondition === 0 ? (
          <div className="row">
            <button className="btn btn-primary btn-lg p-5" onClick={props.deal}>
              DEAL
            </button>
          </div>
        ) : (
          <div className="row">
            <button
              className="btn btn-success btn-lg p-5"
              onClick={props.playerDraw}
            >
              Hit
            </button>

            <button className="btn btn-danger btn-lg mt-3" onClick={props.stay}>
              Stay
            </button>
          </div>
        )}
      </div>
    </>
  );
}

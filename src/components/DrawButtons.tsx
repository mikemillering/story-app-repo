import React from "react";
import "../Index.css";

export default function buttonFunction(props: any) {
  return (
    <>
      <div className="container">
        {props.buttonCondition === 0 ? (
          <div className="row">
            <button className="btn btn-info btn-lg" onClick={props.deal}>
              DEAL
            </button>
          </div>
        ) : (
          <div className="row">
            <div className="col-">
              <button
                className="btn btn-success btn-lg"
                onClick={props.playerDraw}
              >
                Hit
              </button>
            </div>
            <button className="btn btn-danger btn-lg" onClick={props.stay}>
              Stay
            </button>
          </div>
        )}
      </div>
    </>
  );
}

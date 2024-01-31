import React from "react";
import "../Index.css";

export default function buttonFunction(props: any) {
  return (
    <>
      <div className="container">
        <div className="row">
          <button className="btn btn-success btn-lg" onClick={props.test}>
            PlayerDraw
          </button>
          <button className="btn btn-success btn-lg" onClick={props.testTwo}>
            DealerDraw
          </button>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="nav">
        <a href="/" className="site-title">
          App
        </a>
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
        </ul>
      </div>
    </>
  );
}

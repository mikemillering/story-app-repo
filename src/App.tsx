import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
//import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { New } from "./Types";
import InputForm from "./components/InputForm";

function App() {
  const [stories, setStories] = useState<New[]>([]);
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(<></>);

  useEffect(() => {
    console.log(stories);
  }, [stories]);

  const onAddStory = (newStory: New) => {
    setStories([...stories, newStory]);
    console.log("hello");
  };

  const pageSetter = () => {
    console.log(page);
    if (page === 0) {
      setCurrentPage(
        <div className="component">
          <InputForm onAddStory={onAddStory} />
        </div>
      );
    } else {
      setCurrentPage(<></>);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <button
            className="btn btn-light btn-outline-dark"
            onClick={() => {
              setPage((prev) => prev - 1);
              pageSetter();
            }}
          >
            back
          </button>
        </div>
        <div className="col-2 offset-8">
          <button
            className="btn btn-light btn-outline-dark"
            onClick={() => {
              setPage((prev) => prev + 1);
              pageSetter();
            }}
          >
            next
          </button>
        </div>
      </div>
      {currentPage}
    </div>
  );
}

export default App;

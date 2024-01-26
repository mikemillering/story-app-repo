import React, { useState } from "react";
import { InputFormProps, New } from "../Types";

const InputForm: React.FC<InputFormProps> = ({ onAddStory }) => {
  const [storyName, setStoryName] = useState("");
  const [author, setAuthor] = useState("");
  const [showNewInputs, setShowNewInputs] = useState(true);

  const handleAddNew = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const addNew: New = {
      author: author,
      storyName: storyName,
    };
    onAddStory(addNew);
    setShowNewInputs(false);
  };

  return (
    <div className="container">
      {showNewInputs ? (
        <form>
          <div className="input-group m-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Authors Name
              </span>
            </div>

            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
              placeholder=""
              aria-label="Story Name"
              aria-describedby="basic-addon1"
            ></input>
          </div>

          <div className="input-group m-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Story Name
              </span>
            </div>

            <input
              type="text"
              value={storyName}
              onChange={(e) => setStoryName(e.target.value)}
              className="form-control"
              placeholder=""
              aria-label="Story Name"
              aria-describedby="basic-addon1"
            ></input>
          </div>

          <button
            className="btn btn-light btn-outline-dark"
            onClick={handleAddNew}
          >
            Begin Story
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default InputForm;

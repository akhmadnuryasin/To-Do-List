import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [listItem, setListItems] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setListItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input type="text" onChange={handleChange} value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {listItem.map((todoItem, index) => (
              <li key={index}>{todoItem}</li>
            ))}
          </ul>
        </div>
      </div>
      <footer>
        <p>
          created by{" "}
          <a href="" className="decoration-none">
            Akhmad Nuryasin
          </a>
        </p>
        <p>with the enthusiasm of</p>
        <a href="" className="decoration-none">
          Icah Alifah
        </a>
      </footer>
    </div>
  );
}

export default App;

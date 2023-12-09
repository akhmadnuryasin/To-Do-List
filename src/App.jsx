import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [listItem, setListItems] = useState([]);

  function addItem(inputText) {
    setListItems((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function deleteItem(id) {
    setListItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addItem} />
        <div>
          <ul>
            {listItem.map((todoItem, index) => (
              <TodoItem
                key={index}
                id={index}
                todoItem={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
      <footer>
        <p>
          created by
          <a
            href="https://instagram.com/akhmadnuryasin_171?igshid=MzMyNGUyNmU2YQ=="
            className="decoration-none"
          >
            Akhmad Nuryasin
          </a>
        </p>
        <p>with the enthusiasm of</p>
        <a
          href="https://instagram.com/icah_alifah?igshid=MzMyNGUyNmU2YQ=="
          className="decoration-none"
        >
          Icah Alifah
        </a>
      </footer>
    </div>
  );
}

export default App;

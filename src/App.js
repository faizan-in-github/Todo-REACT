import React, { useState } from 'react';
import "./app.css";
import Item from "./components/item";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  function create() {
    if (inputValue.trim() !== "") {
      setItems(prevItems => [...prevItems, inputValue]);
      setInputValue("");
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="container">
      <div className="todo">
        <div className="heading">
          <h1>To-Do</h1>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Type here......."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={create}>+</button>
        </div>

        {/* Render the list of items */}
       
          {items.map((item, index) => (
            <Item key={index} content={item} />
          ))}
        
      </div>
    </div>
  );
}

export default App;

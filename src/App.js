import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [values, setValue] = useState([]);
  const add = () => {
    setData((data) => data.concat(1));
    console.log("add");
  };

  const deleteDiv = () => {
    setData((data) => data.slice(0, data.length - 1));
    console.log("delete");
  };

  const onChangeValue = (event) => {
    console.log("value");
    let option = event.target.options;
    const value = [];
    for (var i = 0; i < option.length; i++) {
      if (option[i].selected) {
        value.push(option[i].value);
      }
    }
    setValue((values) => values.concat(value));
  };
  return (
    <div className="App">
      <button onClick={add}>Add</button>
      <button onClick={() => console.log(values)}>Submit</button>
      {data.map((data, index) => {
        return (
          <div>
            <select key={data} onChange={(e) => onChangeValue(e)}>
              <option>Select from option</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            <button onClick={deleteDiv}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

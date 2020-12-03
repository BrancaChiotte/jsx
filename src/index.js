// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = { text: "Click me!" };
  const labelText = "Enter name: " ;

  return (
    <div>
      <label className="lable" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// same but without arrow function
// const App = function () {
//   return <div>Hi there!</div>;
// };

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

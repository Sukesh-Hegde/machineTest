import React, { useState } from "react";
import "./App.css";
import Child from "./child";

export default function App() {
  const [messageFromChild, setMessageFromChild] = useState('')

  const handleChildData = (childData) => {
    setMessageFromChild(childData);
  };
  return (
    <div className="App">
      <h1>parent component</h1>
      <p>Message from child: {messageFromChild}</p>
      <Child sendDatatoParent={handleChildData} />
    </div>
  );
}

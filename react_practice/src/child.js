import React from 'react'

export default function Child({sendDatatoParent}) {
  const childMessage = "hello from child";
  return (
    <div>
      <h1>child component</h1>
      <button onClick={() => sendDatatoParent(childMessage)}>send data</button>
    </div>
  );
}

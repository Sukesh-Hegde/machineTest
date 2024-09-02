import React from 'react';
import './App.css';

const users = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 15 }
];

export default function App() {
  return (
    <div className="user-list">
      {users.map((user, index) => (
        <div key={index} className="user-item">
          {user.age < 18 ? (
            <h2>{user.name}</h2>
          ) : user.age >= 18 ? (
            <h3>{user.name}</h3>
          ) : (
            <h4>Invalid age</h4>
          )}
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import './App.css';

function App() {
  const users = [{name: "Serg"}, {name: "Sara"}, {name: "Siri"}]
  const liNames = users.map((u, i)=><li key={i}>{u.name}</li>)
  return (
    <div className="App">
      {liNames}
    </div>
  );
}

export default App;

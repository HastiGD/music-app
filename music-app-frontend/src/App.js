import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    let _names = {};
    async function fetchData() {
      const resRaw = await fetch("./data");
      const _names = await resRaw.json();
      console.log("Got names", _names);
    }
    fetchData();
    setNames(_names);
  }, []);

  const renderData = () => names.map((n) => <div key={n}>Name</div>);

  return (
    <div className="App">
      <h1>My Front</h1>
      data:
      {renderData()}
    </div>
  );
}

export default App;

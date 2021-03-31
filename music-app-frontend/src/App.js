import "./App.css";
//import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.js";

function App() {
  // const [names, setNames] = useState([]);

  // useEffect(() => {
  //   let _names = {};
  //   async function fetchData() {
  //     const resRaw = await fetch("./data");
  //     const _names = await resRaw.json();
  //     console.log("Got names", _names);
  //   }
  //   fetchData();
  //   setNames(_names);
  // }, []);

  // const renderData = () => names.map((n) => <div key={n}>Name</div>);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Homepage></Homepage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

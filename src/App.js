import React, { useEffect } from "react";
import NavBar from "./NavBar";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);

  return <NavBar />;
}

export default App;

import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Barber from "./Barber";
import ReviewList from "./ReviewList";

import "./App.css";

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:9292/")
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div>
      <NavBar />
      <Barber />
      <ReviewList />
    </div>
  );
}

export default App;

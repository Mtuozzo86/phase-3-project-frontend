import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Barber from "./Barber";
import ReviewList from "./ReviewList";

import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((resp) => resp.json())
      .then((names) => setCustomers(names));
  }, []);

  return (
    <div>
      <NavBar />
      {/* <Barber /> */}
      <ReviewList people={customers} />
    </div>
  );
}

export default App;

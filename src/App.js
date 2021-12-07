import React, { useEffect, useState } from "react";

import "./App.css";
import InputReviews from "./InputReviews";
function App() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((resp) => resp.json())
      .then((names) => setCustomers(names));
  }, []);

  return (
    <div>
      <InputReviews />
    </div>
  );
}

export default App;

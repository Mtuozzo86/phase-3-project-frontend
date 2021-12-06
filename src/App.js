import React, { useEffect } from "react";
<<<<<<< HEAD
import NavBar from "./NavBar";
import "./App.css";

=======
// testing upload
>>>>>>> 9c024eaf36fc91ad654f62b296508ae134720a8e
function App() {
  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);

  return <NavBar />;
}

export default App;

import React, { useEffect, useState } from "react";

import "./App.css";
import InputReviews from "./InputReviews";
import ReviewBox from "./ReviewBox";

function App() {
  const [customers, setCustomers] = useState([]);
  const [submittedReview, setSubmittedReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((resp) => resp.json())
      .then((names) => setCustomers(names));
  }, []);

  function handleFormSubmit(userReview) {
    setSubmittedReview(userReview);
  }

  return (
    <div>
      <InputReviews onFormSubmit={handleFormSubmit} />
      <ReviewBox submitted={submittedReview} />
    </div>
  );
}

export default App;

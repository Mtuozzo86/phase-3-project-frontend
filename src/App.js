import React, { useEffect, useState } from "react";

import "./App.css";
import InputReviews from "./InputReviews";
import ReviewBox from "./ReviewBox";
import ReviewList from "./ReviewList";

function App() {
  const [submittedReview, setSubmittedReview] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/employees")
      .then((resp) => resp.json())
      .then((names) => setEmployees(names));
  }, []);

  function handleFormSubmit(userReview) {
    const newReview = userReview;
    const newReviewArray = [...submittedReview, newReview];
    setSubmittedReview(newReviewArray);
  }

  return (
    <div>
      <InputReviews onFormSubmit={handleFormSubmit} employees={employees} />
      <ReviewList submitted={submittedReview} />
      {/* <ReviewBox submitted={submittedReview} /> */}
    </div>
  );
}

export default App;

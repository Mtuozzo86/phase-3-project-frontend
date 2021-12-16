import React, { useEffect, useState } from "react";
import "./App.css";
import InputReviews from "./InputReviews";
import ReviewList from "./ReviewList";
import EditReview from "./EditReview";

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

  function onDelete(deletedReview) {
    console.log(deletedReview);

    fetch(`http://localhost:9292/reviews/${deletedReview}`, {
      method: "DELETE",
    });
    setSubmittedReview(
      submittedReview.filter((review) => review.id !== deletedReview)
    );
  }

  return (
    <div>
      <InputReviews onFormSubmit={handleFormSubmit} employees={employees} />
      <ReviewList submitted={submittedReview} onDelete={onDelete} />
      <EditReview />
    </div>
  );
}

export default App;

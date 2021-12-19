import React, { useEffect, useState } from "react";
import "./App.css";
import InputReviews from "./InputReviews";
import ReviewList from "./ReviewList";

function App() {
  const [submittedReview, setSubmittedReview] = useState([]);
  const [employees, setEmployees] = useState([]);
  console.log(submittedReview);

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

  function handleUpdateReview(updatedReview) {
    const updated = submittedReview.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    console.log(updated);
    setSubmittedReview(updated);
  }

  function onDelete(deletedReview) {
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
      <ReviewList
        submitted={submittedReview}
        onDelete={onDelete}
        onUpdateReview={handleUpdateReview}
      />
    </div>
  );
}

export default App;

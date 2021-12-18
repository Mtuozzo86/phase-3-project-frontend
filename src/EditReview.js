import { useState } from "react";

function EditReview({ review, id, onUpdateReview }) {
  const [updatedBody, setUpdatedBody] = useState(review);
  function handleEdit(e) {
    setUpdatedBody(e.target.value);
  }

  function handleUpdateSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        body: updatedBody,
      }),
    })
      .then((resp) => resp.json())
      .then((updateReview) => onUpdateReview(updateReview));
  }

  return (
    <form onSubmit={handleUpdateSubmit}>
      <input type="text" onChange={handleEdit} value={updatedBody} />
      <input type="submit" value="resubmit"></input>
    </form>
  );
}

export default EditReview;

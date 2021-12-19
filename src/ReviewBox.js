import { useState } from "react";

import EditReview from "./EditReview";
import "./ReviewBox.css";

function ReviewBox({ user, review, id, onDelete, onUpdateReview }) {
  const [editting, setEdit] = useState(false);

  function handleDelete() {
    onDelete(id);
  }
  function handleUpdateReview(updatedReview) {
    setEdit(false);
    onUpdateReview(updatedReview);
  }

  return (
    <div className="card">
      <div className="container">
        <h3>
          <em>{user}</em>
        </h3>
      </div>
      <div>
        {editting ? (
          <EditReview
            review={review}
            id={id}
            onUpdateReview={handleUpdateReview}
          />
        ) : (
          <p>{review} </p>
        )}
      </div>

      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setEdit((editting) => !editting)}>Edit</button>
    </div>
  );
}
export default ReviewBox;

import "./InputReviews.css";
import { useState } from "react";

function InputReviews({ onFormSubmit }) {
  const [userName, setUserName] = useState("");
  const [body, setBody] = useState("");
  const [userData, setUserData] = useState([]);

  function handleNameInput(e) {
    setUserName(e.target.value);
  }

  function handleReviewBody(e) {
    setBody(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      userName: userName,
      body: body,
    };
    onFormSubmit(formData);
    setUserName("");
    setBody("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="name" />
          <input
            value={userName}
            type="text"
            id="name"
            name="name"
            placeholder="Your name..."
            onChange={handleNameInput}
          />
        </div>
        <div>
          <label for="text-box" />
          <textarea
            value={body}
            id="text-box"
            cols="30"
            rows="4"
            placeholder="Leave a review..."
            onChange={handleReviewBody}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default InputReviews;

import "./InputReviews.css";
import { useState } from "react";

function InputReviews() {
  const [userName, setUserName] = useState();
  const [body, setBody] = useState("");

  function handleNameInput(e) {
    setUserName(e.target.value);
    console.log(userName);
  }

  function handleReviewBody(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <form>
        <div>
          <label for="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name..."
            onChange={handleNameInput}
          ></input>
        </div>
        <div>
          <label for="text-box"></label>
          <textarea
            id="text-box"
            cols="30"
            rows="4"
            placeholder="Leave a review..."
            onChange={handleReviewBody}
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default InputReviews;

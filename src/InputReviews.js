import "./InputReviews.css";
import { useState } from "react";

function InputReviews({ onFormSubmit, customerId }) {
  const [userName, setUserName] = useState("");
  const [body, setBody] = useState("");
  const [barber, setBarber] = useState("");

  function handleNameInput(e) {
    setUserName(e.target.value);
  }

  function handleReviewBody(e) {
    setBody(e.target.value);
  }

  function handleFilterChange(e) {
    setBarber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        body: body,
      }),
    });

    const formData = {
      userName: userName,
      barber: barber,
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
          <label className="barber-list" for="barbers">
            Choose your barber:
          </label>
          <select id="barbers" name="barbers" onChange={handleFilterChange}>
            <option></option>
            <option value="Joe">Joe</option>
            <option value="Jesse">Jesse</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default InputReviews;

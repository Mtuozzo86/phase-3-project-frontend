import "./InputReviews.css";
import { useState } from "react";

function InputReviews({ onFormSubmit, employees }) {
  const [userName, setUserName] = useState("");
  const [body, setBody] = useState("");
  const [barber, setBarber] = useState("1");

  const renderOptions = employees.map((employee) => {
    return (
      <option key={employee.id} value={`${employee.id}`}>
        {employee.name}
      </option>
    );
  });

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

    const formData = {
      customer_id: userName,
      employee_id: barber,
      body: body,
    };
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => onFormSubmit(data));

    setUserName("");
    setBody("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" />
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
          <label htmlFor="text-box" />
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
          <label className="barber-list" htmlFor="barbers">
            Choose your barber:
          </label>
          <select id="barbers" name="barbers" onChange={handleFilterChange}>
            {renderOptions}
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

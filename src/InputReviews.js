import "./InputReviews.css";

function InputReviews() {
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
          ></input>
        </div>
        <div>
          <label for="text-box"></label>
          <textarea
            id="text-box"
            cols="30"
            rows="4"
            placeholder="Leave a review..."
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

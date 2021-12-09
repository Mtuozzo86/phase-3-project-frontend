import "./ReviewBox.css";

function ReviewBox({ user, barber, review }) {
  function handleClick() {}
  return (
    <div className="card">
      <div className="container">
        <h3>
          <em>{user}</em> says...{" "}
        </h3>
        <p>{review} </p>
      </div>
      <button onClick={handleClick} className="close-btn">
        X
      </button>
    </div>
  );
}
export default ReviewBox;

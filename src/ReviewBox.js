import "./ReviewBox.css";

function ReviewBox({ user, barber, review }) {
  return (
    <div className="card">
      <div className="container">
        <h3>
          <em>{user}</em> says...{" "}
        </h3>
        <p>{review} </p>
      </div>
    </div>
  );
}
export default ReviewBox;

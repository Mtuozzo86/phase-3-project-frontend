import "./ReviewBox.css";

function ReviewBox({ user, review, id }) {
  function handleDelete() {
    console.log(id);
  }

  return (
    <div className="card">
      <div className="container">
        <h3>
          <em>{user}</em> says...{" "}
        </h3>
        <p>{review} </p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default ReviewBox;

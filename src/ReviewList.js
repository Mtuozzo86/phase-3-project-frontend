import ReviewBox from "./ReviewBox";

function ReviewList({ submitted }) {
  console.log(submitted);
  const reviews = submitted.map((elem) => (
    <ReviewBox
      key={elem.id}
      user={elem.userName}
      review={elem.body}
      barber={elem.barber}
      id={elem.id}
    />
  ));

  return <div>{reviews}</div>;
}
export default ReviewList;

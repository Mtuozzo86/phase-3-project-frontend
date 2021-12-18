import ReviewBox from "./ReviewBox";

function ReviewList({ submitted, onDelete, onUpdateReview }) {
  const reviews = submitted.map((elem) => (
    <ReviewBox
      key={elem.id}
      user={elem.customer_name}
      review={elem.body}
      barber={elem.barber}
      id={elem.id}
      onDelete={onDelete}
      onUpdateReview={onUpdateReview}
    />
  ));

  return <div>{reviews}</div>;
}
export default ReviewList;

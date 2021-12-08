import ReviewBox from "./ReviewBox";

function ReviewList({ submitted }) {
  console.log(submitted);

  const reviews = submitted.map((elem) => (
    <ReviewBox user={elem.userName} review={elem.body} barber={elem.barber} />
  ));

  return <>{reviews} </>;
}
export default ReviewList;

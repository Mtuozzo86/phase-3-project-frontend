function EditReview() {

    function handleEdit(e) {
      console.log(e.target.value)
    }

  return (
      <input type="text" onChange={handleEdit} />
  )
}

export default EditReview
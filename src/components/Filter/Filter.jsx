function Filter({ filter, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="find" onChange={onChange} value={filter} />
    </>
  );
}

export default Filter;

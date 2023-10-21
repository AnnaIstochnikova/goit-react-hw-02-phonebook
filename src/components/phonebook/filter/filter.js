export const Filter = ({ filterFn }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        className="find-contact"
        name="find-contact"
        onChange={filterFn}
      ></input>
    </>
  );
};

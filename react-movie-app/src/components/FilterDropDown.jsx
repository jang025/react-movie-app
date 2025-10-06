const FilterDropDown = () => {
  return (
    <>
      <label htmlFor="filter">Choose a category:</label>
      <select id="filter" name="filter">
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="comedy">Comedy</option>
      </select>
    </>
  );
};

export default FilterDropDown;

import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../../redux/contacts/contacts-action";
import { FilterTitle, FilterInput } from "./Filter.styled";

function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const value = e.target.value;
    dispatch(filterContact(value));
  };

  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        value={value}
        onChange={handleChangeFilter}
        placeholder="Search by name..."
      />
    </>
  );
}

export default Filter;

import PropTypes from "prop-types";
import s from "./Filter.module.scss";

export function Filter({ filter, onChange }) {
  return (
    <label className={s.Filter}>
      <p className="labelText">Find contacts by name</p>
      <input
        type="text"
        className="search"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.string,
};

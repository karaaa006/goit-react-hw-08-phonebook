import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/reducers/filter";

import s from "./Filter.module.scss";

export function Filter() {
  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(setFilter(filterText)), [filterText]);

  return (
    <label className={s.Filter}>
      <p className="labelText">Find contacts by name</p>
      <input
        type="text"
        className="search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </label>
  );
}

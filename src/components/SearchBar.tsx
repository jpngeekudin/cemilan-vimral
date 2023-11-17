import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../stores/slices/product.slice";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <div className="position-relative">
      <div
        className="position-absolute text-muted"
        style={{ left: 15, top: "50%", transform: "translateY(-50%)" }}
      >
        <i className="fa fa-search"></i>
      </div>
      <input
        type="text"
        className="form-control bg-light border-0 p-3 ps-5"
        placeholder="Search product here"
        onChange={(e) => {
          const { value } = e.target;
          dispatch(setSearch(value));
        }}
      />
    </div>
  );
}

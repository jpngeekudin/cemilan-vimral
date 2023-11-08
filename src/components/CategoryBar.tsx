import React, { useState } from "react";
import { toTitleCase } from "../helpers/string.helper";
import { categories } from "../configs/category.config";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../stores/store";
import styled from "styled-components";
import classNames from "classnames";
import { selectCategory } from "../stores/slices/product.slice";

export default function CategoryBar() {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector(
    (state: RootState) => state.productReducer
  );

  return (
    <div className="d-flex" style={{ gap: 10, overflowY: "auto" }}>
      <CategoryItem
        className={classNames("rounded", "px-3", "py-2", {
          active: !selectedCategory,
        })}
        onClick={() => {
          dispatch(selectCategory(null));
        }}
      >
        All
      </CategoryItem>
      {categories.map((category) => {
        return (
          <CategoryItem
            className={classNames("rounded", "px-3", "py-2", {
              active: category === selectedCategory,
            })}
            onClick={() => {
              dispatch(selectCategory(category));
            }}
          >
            {toTitleCase(category)}
          </CategoryItem>
        );
      })}
    </div>
  );
}

const CategoryItem = styled("div")`
  background-color: var(--bs-light);
  cursor: pointer;

  &.active {
    background-color: rgba(var(--bs-primary-rgb), 0.1);
    font-weight: bold;
    color: var(--bs-primary);
  }
`;

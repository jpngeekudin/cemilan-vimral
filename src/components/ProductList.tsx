import React, { useState } from "react";
import styled from "styled-components";
import { products } from "../configs/product.config";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { toTitleCase } from "../helpers/string.helper";

export default function ProductList() {
  const { selectedCategory } = useSelector(
    (state: RootState) => state.productReducer
  );

  return (
    <div>
      {products
        .filter((p) =>
          !selectedCategory ? true : p.category === selectedCategory
        )
        .map((product) => {
          return (
            <ProductItem
              className="rounded d-flex align-items-center mb-3 p-3"
              style={{ gap: 15, cursor: "pointer" }}
            >
              <div
                className="rounded d-flex align-items-center justify-content-center text-primary"
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "rgba(var(--bs-primary-rgb), 0.1)",
                }}
              >
                <i className="fa fa-burger"></i>
              </div>
              <div>
                <div className="fw-bold">{product.name}</div>
                <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                  {toTitleCase(product.category)}
                </div>
              </div>
            </ProductItem>
          );
        })}
    </div>
  );
}

const ProductItem = styled("div")`
  background-color: var(--bs-light);
  color: var(--bs-gray-900);

  &:hover {
    background-color: var(--bs-gray-200);
  }
`;
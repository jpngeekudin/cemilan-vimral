import React from "react";
import ProductList from "../components/ProductList";
import CategoryBar from "../components/CategoryBar";
import SearchBar from "../components/SearchBar";
import HeaderV2 from "../components/HeaderV2";

export default function HomePage() {
  return (
    <div
      className="container bg-white p-0"
      style={{ minHeight: "100vh", maxWidth: 480 }}
    >
      <HeaderV2 />
      <div className="p-3">
        <div className="mb-3">
          <SearchBar />
        </div>
        <div className="mb-3">
          <CategoryBar />
        </div>
        <ProductList />
      </div>
    </div>
  );
}

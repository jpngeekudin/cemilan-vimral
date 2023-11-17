import React from "react";
import ProductList from "../components/ProductList";
import CategoryBar from "../components/CategoryBar";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <div
      className="container bg-white p-3"
      style={{ minHeight: "100vh", maxWidth: 480 }}
    >
      <Header />
      <div className="mb-3">
        <SearchBar />
      </div>
      <div className="mb-3">
        <CategoryBar />
      </div>
      <ProductList />
    </div>
  );
}

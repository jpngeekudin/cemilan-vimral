import React from "react";
import ProductList from "../components/ProductList";
import CategoryBar from "../components/CategoryBar";

export default function HomePage() {
  return (
    <div
      className="container bg-white p-3"
      style={{ minHeight: "100vh", maxWidth: 480 }}
    >
      <div
        className="rounded text-center p-5 mb-3"
        style={{ backgroundColor: "rgba(var(--bs-primary-rgb), 0.1)" }}
      >
        <div className="fw-bold text-primary" style={{ fontSize: "1.5rem" }}>
          Cemilan Vimral
        </div>
      </div>
      <div className="mb-3">
        <CategoryBar />
      </div>
      <ProductList />
    </div>
  );
}

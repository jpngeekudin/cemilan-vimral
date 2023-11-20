import React from "react";

export default function HeaderV2() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: 250,
          background: "url(/assets/images/header.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div
        className="d-flex align-items-center justify-content-center fw-bold"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: 'var(--bs-dark)',
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          fontSize: "3rem",
        }}
      >
        Cemilan Viral
      </div>
    </div>
  );
}

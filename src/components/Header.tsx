import React, { useState } from "react";
import classNames from "classnames";
import ShopeeIcon from "../icons/ShopeeIcon";

export default function Header() {
  const [snsList] = useState([
    {
      icon: "fa-brands fa-tiktok",
      url: "https://tiktok.com/",
      iconComponent: null,
    },
    {
      icon: "fa-brands fa-instagram",
      url: "https://instagram.com/",
      iconComponent: null,
    },
    { icon: null, url: "https://shopee.co.id/", iconComponent: ShopeeIcon },
  ]);

  return (
    <div
      className="rounded text-center mb-3 position-relative d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "rgba(var(--bs-primary-rgb), 0.1)",
        height: 200,
      }}
    >
      <div className="fw-bold text-primary" style={{ fontSize: "1.5rem" }}>
        Cemilan Vimral
      </div>

      <div
        className="position-absolute d-flex"
        style={{ right: 10, bottom: 10, gap: 10 }}
      >
        {snsList.map((sns) => {
          return (
            <a href={sns.url} target="_blank">
              <div
                className="rounded text-primary d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(var(--bs-primary-rgb), 0.2)",
                  cursor: "pointer",
                  height: 40,
                  width: 40,
                }}
              >
                {sns.iconComponent ? (
                  <sns.iconComponent />
                ) : (
                  <i className={classNames(sns.icon)}></i>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

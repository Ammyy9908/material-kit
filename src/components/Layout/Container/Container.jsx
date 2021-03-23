import React from "react";

function Container({ children, maxWidth }) {
  return (
    <div
      className={`container ${
        maxWidth === "sm" ? "container__sm" : "container__lg"
      }`}
    >
      {children}
    </div>
  );
}

export default Container;

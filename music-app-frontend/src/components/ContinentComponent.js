import React from "react";

export default function ContinentComponent({ continent }) {
  return (
    <h1 className="display-6 fs-3" style={{ color: "white" }}>
      {continent}
    </h1>
  );
}

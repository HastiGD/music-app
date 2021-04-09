import React from "react";

function createAlert(type, message, onClick) {
  if (type === "danger") {
    return (
      <div
        className={"alert alert-danger"}
        role="alert"
        style={{ width: "50%" }}
      >
        {message}
      </div>
    );
  } else if (type === "success") {
    return (
      <div
        className="alert alert-success alert-dismissible"
        role="alert"
        style={{ width: "50%" }}
      >
        {message}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClick}
        ></button>
      </div>
    );
  }
}

export default function AlertComponent({ type, message, onClick }) {
  return <div>{createAlert(type, message, onClick)}</div>;
}

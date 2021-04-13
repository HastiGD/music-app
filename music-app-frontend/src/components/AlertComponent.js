import React from "react";

function createAlert(type, message) {
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
        className="alert alert-success"
        role="alert"
        style={{ width: "50%" }}
      >
        {message}
      </div>
    );
  }
}

export default function AlertComponent({ type, message }) {
  return <div>{createAlert(type, message)}</div>;
}

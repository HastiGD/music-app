import React from "react";
import { useLocation } from "react-router-dom";

export default function DiscoverPage() {
  const { state } = useLocation();

  return (
    <div>
      <h1 className="display-6 fs-2">
        Here's what people are listening to in {state.country}
      </h1>
    </div>
  );
}

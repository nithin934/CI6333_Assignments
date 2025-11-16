// ThankYou.js
import React from "react";
import { useLocation } from "react-router-dom";

function ThankYou() {
  const location = useLocation();
  const name = location.state?.name || "Guest";

  return (
    <div>
      <h1>Thank You!</h1>
      <p>We received your message, {name}.</p>
    </div>
  );
}

export default ThankYou;

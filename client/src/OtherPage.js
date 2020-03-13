import React from "react";
import { Link } from "react-router-dom";

export default function OtherPage() {
  return (
    <div>
      I am some other pages!
      <Link to="/">Go back home</Link>
    </div>
  );
}

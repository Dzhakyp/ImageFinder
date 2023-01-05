import React from "react";

export default function Button({ onClick }) {
  return (
    <div className="container">
      <button className="Button" onClick={onClick}>
        Load More
      </button>
      ;
    </div>
  );
}

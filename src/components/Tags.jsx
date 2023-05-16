import React from "react";
import "../styles/components/_tags.css";
const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags &&
        tags.map((tag, index) => (
          <div className="tags__content" key={index}>
            <span>{tag}</span>
          </div>
        ))}
    </div>
  );
};

export default Tags;

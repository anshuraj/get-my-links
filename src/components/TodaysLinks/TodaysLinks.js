import React from "react";

const links = ["one", "two", "three", "four", "five"];

const TodaysLinks = () => {
  return (
    <div>
      <h3>Today's links</h3>
      <ul>
        {links.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodaysLinks;

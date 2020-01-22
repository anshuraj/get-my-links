import React from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import TodaysLinks from "../TodaysLinks/TodaysLinks";
import "./App.css";

function App() {
  return (
    <div>
      <h2>Get My Links</h2>

      <div>Add a new Link</div>
      <Input />
      <Button text="Add" />

      <TodaysLinks />
    </div>
  );
}

export default App;

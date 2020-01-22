import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Get My Links text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Get My Links/i);
  expect(linkElement).toBeInTheDocument();
});

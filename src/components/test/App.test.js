import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("test first", () => {
  it("first test", () => {
    render(<App />);
    expect(screen.getByText("React started again")).toBeInTheDocument();
  });
});

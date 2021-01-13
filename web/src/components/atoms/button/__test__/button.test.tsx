import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Button } from "..";
import { ThemeProvider } from "styled-components";
import { main } from "global/colors";

it("renders the button in the primary state", () => {
  render(
    <ThemeProvider theme={main}>
      <Button variant="primary" />
    </ThemeProvider>
  );
  expect(screen.getByRole("button")).toHaveTextContent("Primary");
});

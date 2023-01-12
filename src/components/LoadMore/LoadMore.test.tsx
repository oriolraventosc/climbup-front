import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import LoadMore from "./LoadMore";

describe("Given a LoadMore component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'CARGAR MÁS'", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <LoadMore />
        </ThemeProvider>
      );
      const buttonText = "CARGAR MÁS";

      const expectedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});

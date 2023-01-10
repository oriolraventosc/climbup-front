import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 title with the text 'climbup'", () => {
      const expectedTitleText = "climbup";
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      );

      const expectedTitle = screen.queryByRole("heading", {
        level: 1,
        name: expectedTitleText,
      });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show an anchor with the text 'Buscar rocódromos'", () => {
      const expectedName = "Buscar rocódromos";
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      );

      const expectedAnchor = screen.queryByLabelText(
        expectedName
      ) as HTMLElement;

      expect(expectedAnchor).toBeInTheDocument();
    });

    test("Then it should show an anchor with the text 'Iniciar sesión'", () => {
      const expectedName = "Buscar rocódromos";
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
      );

      const expectedAnchor = screen.queryByLabelText(
        expectedName
      ) as HTMLElement;

      expect(expectedAnchor).toBeInTheDocument();
    });
  });
});

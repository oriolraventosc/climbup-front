import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import NoResults from "./NoResults";

describe("Given a NoResults component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an icon", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <NoResults />
        </ThemeProvider>
      );
      const iconName = "icono no hay resultados";

      const expectedIcon = screen.queryByLabelText(iconName);

      expect(expectedIcon).toBeInTheDocument();
    });

    test("Then it should show the text 'No hay resultados'", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <NoResults />
        </ThemeProvider>
      );
      const text = "No hay resultados";

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
});

import ClimbingWall from "./ClimbingWall";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Given a ClimbingWall component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an accessible name 'dracdepedra.jpg'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <ClimbingWall
                name="Drac de Pedra"
                address="Rubí, Barcelona 08191"
                description="Rocódromo situado en Rubí"
                picture1="dracdepedra.jpg"
                key="dracdepedra"
                id="1234566788"
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const expectedAccessibleName = "Drac de Pedra";

      const expectedImage = screen.queryByRole("img", {
        name: expectedAccessibleName,
      });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading level 2 title with the text 'Drac de Pedra'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <ClimbingWall
                name="Drac de Pedra"
                address="Rubí, Barcelona 08191"
                description="Rocódromo situado en Rubí"
                picture1="dracdepedra.jpg"
                key="dracdepedra"
                id="1234566788"
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const expectedTitle = "Drac de Pedra";

      const expectedHeading = screen.queryByRole("heading", {
        level: 2,
        name: expectedTitle,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Rocódromo situado en Rubí'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <ClimbingWall
                name="Drac de Pedra"
                address="Rubí, Barcelona 08191"
                description="Rocódromo situado en Rubí"
                picture1="dracdepedra.jpg"
                key="dracdepedra"
                id="1234566788"
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const paragraphText = "Rocódromo situado en Rubí";

      const expectedParagraph = screen.getByText(paragraphText) as HTMLElement;

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Rubí, Barcelona 08191'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <ClimbingWall
                name="Drac de Pedra"
                address="Rubí, Barcelona 08191"
                description="Rocódromo situado en Rubí"
                picture1="dracdepedra.jpg"
                key="dracdepedra"
                id="1234566788"
              />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const paragraphText = "Rubí, Barcelona 08191";

      const expectedParagraph = screen.getByText(paragraphText) as HTMLElement;

      expect(expectedParagraph).toBeInTheDocument();
    });
  });
});

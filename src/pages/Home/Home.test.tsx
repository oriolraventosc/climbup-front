import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Given a Home component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'No hay resultados'", () => {
      render(
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            <Home />
          </ThemeProvider>
        </Provider>
      );
      const text = "No hay resultados";

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should show a texfield", () => {
      render(
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            <Home />
          </ThemeProvider>
        </Provider>
      );

      const expectedTextField = screen.getByRole("textbox") as HTMLElement;

      expect(expectedTextField).toBeInTheDocument();
    });

    test("Then it should show a 'Instalaciones' select", () => {
      render(
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            <Home />
          </ThemeProvider>
        </Provider>
      );

      const expectedSelect = screen.getByRole("button", {
        name: "Instalaciones",
      }) as HTMLElement;

      expect(expectedSelect).toBeInTheDocument();
    });

    test("Then it should show a 'Actividades' select", () => {
      render(
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            <Home />
          </ThemeProvider>
        </Provider>
      );

      const expectedSelect = screen.getByRole("button", {
        name: "Actividades",
      }) as HTMLElement;

      expect(expectedSelect).toBeInTheDocument();
    });
  });
});

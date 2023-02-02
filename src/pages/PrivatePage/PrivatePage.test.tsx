import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import PrivatePage from "./PrivatePage";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

describe("Given a Home component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'No hay resultados'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PrivatePage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const text = "No hay resultados";

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should show a texfield", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PrivatePage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedTextField = screen.getByRole("textbox") as HTMLElement;

      expect(expectedTextField).toBeInTheDocument();
    });

    test("Then it should show a 'Instalaciones' select", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PrivatePage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedSelect = screen.getByRole("button", {
        name: "Instalaciones",
      }) as HTMLElement;

      expect(expectedSelect).toBeInTheDocument();
    });

    test("Then it should show a 'Actividades' select", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PrivatePage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedSelect = screen.getByRole("button", {
        name: "Actividades",
      }) as HTMLElement;

      expect(expectedSelect).toBeInTheDocument();
    });

    test("Then it should show a button with an accessible name 'AÑADIR ROCÓDROMO'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <PrivatePage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedAñadirRocodromoButton = screen.getByRole("button", {
        name: "Añadir rocódromo",
      }) as HTMLElement;

      expect(expectedAñadirRocodromoButton).toBeInTheDocument();
    });
  });
});

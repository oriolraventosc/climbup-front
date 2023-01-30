import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import DetailsPage from "./DetailsPage";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

describe("Given a DetailsPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a level 3 heading 'Dirección'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <DetailsPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const text = "Dirección";

      const expectedHeading = screen.getByRole("heading", {
        level: 3,
        name: text,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a level 3 heading 'Horario'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <DetailsPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const text = "Horario";

      const expectedHeading = screen.getByRole("heading", {
        level: 3,
        name: text,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a level 3 heading 'Instalaciones'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <DetailsPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const text = "Instalaciones";

      const expectedHeading = screen.getByRole("heading", {
        level: 3,
        name: text,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a level 3 heading 'Actividades'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <DetailsPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const text = "Actividades";

      const expectedHeading = screen.getByRole("heading", {
        level: 3,
        name: text,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a level 3 heading 'Tarifas'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <DetailsPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const text = "Tarifas";

      const expectedHeading = screen.getByRole("heading", {
        level: 3,
        name: text,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a level 3 heading 'Datos de contacto'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <DetailsPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const text = "Datos de contacto";

      const expectedHeading = screen.getByRole("heading", {
        level: 3,
        name: text,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});

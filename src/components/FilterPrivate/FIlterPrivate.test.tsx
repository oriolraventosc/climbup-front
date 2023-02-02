import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ThemeProvider } from "@mui/material";
import mainTheme from "../../styles/mainTheme";
import GlobalStyles from "../../styles/globalStyles";
import FilterPrivate from "./FilterPrivate";

const mockFilter = jest.fn();

jest.mock("../../hooks/climbingWall/useClimbingWall", () => {
  return () => ({
    loadAllClimbingWalls: mockFilter,
  });
});
const dispatch = jest.spyOn(store, "dispatch");

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a textbox with an accessible name 'Nombre de ciudad/pueblo'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <FilterPrivate />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedTextBox = screen.getByRole("textbox", {
        name: "",
      }) as HTMLElement;

      expect(expectedTextBox).toBeInTheDocument();
    });

    test("Then it should show a button with an accessible name 'Instalaciones'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <FilterPrivate />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedInstallationsButton = screen.getByRole("button", {
        name: "Instalaciones",
      }) as HTMLElement;

      expect(expectedInstallationsButton).toBeInTheDocument();
    });

    test("Then it should show a button with an accessible name 'Actividades'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <FilterPrivate />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedActivitiesButton = screen.getByRole("button", {
        name: "Actividades",
      }) as HTMLElement;

      expect(expectedActivitiesButton).toBeInTheDocument();
    });

    test("Then it should show a button with an accessible name 'AÑADIR ROCÓDROMO'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <FilterPrivate />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedAñadirRocodromoButton = screen.getByRole("button", {
        name: "Añadir rocódromo",
      }) as HTMLElement;

      expect(expectedAñadirRocodromoButton).toBeInTheDocument();
    });

    test("Then it should call an action if filled the inputs", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <FilterPrivate />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const moonBoard = "Moonboard";
      const escuelaDeEscalada = "Escuela de escalada";

      const expectedTextBox = screen.getByRole("textbox", {
        name: "",
      }) as HTMLElement;
      const expectedActivitiesButton = screen.getByRole("button", {
        name: "Actividades",
      }) as HTMLElement;
      const expectedInstallationsButton = screen.getByRole("button", {
        name: "Instalaciones",
      }) as HTMLElement;
      await userEvent.type(expectedTextBox, "rubí");
      await userEvent.click(expectedInstallationsButton);
      const moonBoardOption = screen.getByRole("option", { name: moonBoard });
      await userEvent.click(moonBoardOption);
      await userEvent.click(expectedActivitiesButton);
      const escuelaDeEscaladaOption = screen.getByRole("option", {
        name: escuelaDeEscalada,
      });
      await userEvent.click(escuelaDeEscaladaOption);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

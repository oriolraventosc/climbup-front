import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./404page";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a paragraph with the text '404'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <NotFoundPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const paragraphText = "404";

      const expectedParagraph = screen.getByText(paragraphText) as HTMLElement;

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a paragraph with the text 'Página no encontrada.'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <NotFoundPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const paragraphText = "Página no encontrada.";

      const expectedParagraph = screen.getByText(paragraphText) as HTMLElement;

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'VOLVER AL INICIO'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <NotFoundPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const buttonText = "VOLVER AL INICIO";

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      }) as HTMLElement;

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then if clicked the button it should call an action", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <NotFoundPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const buttonText = "VOLVER AL INICIO";

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      }) as HTMLElement;
      await userEvent.click(expectedButton);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});

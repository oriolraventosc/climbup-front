import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ThemeProvider } from "@mui/material";
import mainTheme from "../../styles/mainTheme";
import GlobalStyles from "../../styles/globalStyles";
import LoginPage from "./LoginPage";

const mockLogin = jest.fn();

jest.mock("../../hooks/user/useUser", () => {
  return () => ({
    login: mockLogin,
  });
});

describe("Given a RegisterPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 title with the text 'Registrarse'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const headingText = "Inicia sesión";

      const expectedHeading = screen.queryByRole("heading", {
        level: 2,
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a input with an accessible name 'Email'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const inputName = "Email";

      const expectedInput = screen.queryByRole("textbox", {
        name: inputName,
      });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show a input with an accessible name 'Contraseña'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const inputName = "Contraseña";

      const expectedInput = screen.getByRole("generic", {
        name: inputName,
      }) as HTMLElement;

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show a button with the name 'Registrarme'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const buttonText = "Iniciar sesión";

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      }) as HTMLElement;

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a anchor with the text 'Regístrate ahora'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const anchorText = "Regístrate ahora";

      const expectedAnchor = screen.getByRole("link", {
        name: anchorText,
      }) as HTMLElement;

      expect(expectedAnchor).toBeInTheDocument();
    });

    test("Then it should show a anchor with the text 'Inicia sesión aquí' and if clicked it should call an action", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const anchorText = "Regístrate ahora";

      const expectedAnchor = screen.getByRole("link", {
        name: anchorText,
      }) as HTMLElement;
      await userEvent.click(expectedAnchor);

      expect(expectedAnchor).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the inputs are filled", () => {
    test("Then it should call it's register action", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoginPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const emailInputName = "Email";
      const passwordInputName = "Contraseña";
      const buttonText = "Iniciar sesión";

      const expectedPasswordInput = screen.getByRole("generic", {
        name: passwordInputName,
      }) as HTMLElement;
      const expectedEmailInput = screen.queryByRole("textbox", {
        name: emailInputName,
      }) as HTMLElement;
      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      }) as HTMLElement;
      await userEvent.type(expectedEmailInput, "user@gmail.com");
      await userEvent.type(expectedPasswordInput, "userclimber");
      await userEvent.click(expectedButton);

      expect(mockLogin).toHaveBeenCalled();
    });
  });
});

import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 title with the text 'climbup'", () => {
      const expectedTitleText = "climbup";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Header />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
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
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Header />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedAnchor = screen.queryByLabelText(
        expectedName
      ) as HTMLElement;

      expect(expectedAnchor).toBeInTheDocument();
    });

    test("Then it should show an anchor with the text 'Iniciar sesión'", () => {
      const expectedName = "Iniciar sesión";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Header />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedAnchor = screen.queryByLabelText(
        expectedName
      ) as HTMLElement;

      expect(expectedAnchor).toBeInTheDocument();
    });

    test("Then it should call an action when clicked when clicked the icon", async () => {
      const expectedName = "home-icon";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Header />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedImage = screen.queryByTestId(expectedName) as HTMLElement;
      await userEvent.click(expectedImage);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });

    test("Then it should call an action when clicked when clicked the heading 'cimbup'", async () => {
      const expectedTitleText = "climbup";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Header />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedTitle = screen.queryByRole("heading", {
        level: 1,
        name: expectedTitleText,
      }) as HTMLElement;
      await userEvent.click(expectedTitle);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });

    test("Then it should call an action when clicked when clicked the paragraph 'Buscar rocódromos'", async () => {
      const expectedText = "Buscar rocódromos";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Header />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedAnchor = screen.queryByLabelText(
        expectedText
      ) as HTMLElement;
      await userEvent.click(expectedAnchor);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });

    test("Then it should call an action when clicked when clicked the paragraph 'Iniciar sesión'", async () => {
      const expectedText = "Iniciar sesión";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <Header />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedAnchor = screen.queryByLabelText(
        expectedText
      ) as HTMLElement;
      await userEvent.click(expectedAnchor);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});

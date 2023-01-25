import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import LoadMore from "./LoadMore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import userEvent from "@testing-library/user-event";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given a LoadMore component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'CARGAR MÁS'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoadMore />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const buttonText = "CARGAR MÁS";

      const expectedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered and clicked", () => {
    test("Then it should call an action", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyles />
              <LoadMore />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );
      const buttonText = "CARGAR MÁS";

      const expectedButton = screen.queryByRole("button", {
        name: buttonText,
      }) as HTMLElement;
      await userEvent.click(expectedButton);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

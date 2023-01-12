import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import LoadMore from "../../components/LoadMore/LoadMore";

describe("Given a Home component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the climbing walls list", () => {
      render(
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            <Home />
          </ThemeProvider>
        </Provider>
      );
      const paragraphAccessibleName = "climbing walls list";

      const expectedList = screen.queryByLabelText(paragraphAccessibleName);

      expect(expectedList).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'CARGAR MÁS'", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <LoadMore />
        </ThemeProvider>
      );
      const buttonText = "CARGAR MÁS";

      const expectedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});

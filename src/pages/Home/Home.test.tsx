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
  });
});

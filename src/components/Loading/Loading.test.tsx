import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "../../styles/globalStyles";
import mainTheme from "../../styles/mainTheme";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the loading", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <Loading />
        </ThemeProvider>
      );
      const accessibleName = "loading";

      const expectedLoading = screen.queryByLabelText(accessibleName);

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});

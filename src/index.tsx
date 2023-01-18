import React from "react";
import { ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import App from "./components/App/App";
import "./index.css";
import mainTheme from "./styles/mainTheme";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import StyledTheme from "./styles/colors";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <StyledThemeProvider theme={StyledTheme}>
            <GlobalStyles />
            <App />
          </StyledThemeProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

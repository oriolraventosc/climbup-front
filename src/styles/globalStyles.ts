import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
::selection {
  background-color: #6CCFF6;
  color: #fff
}
html {
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #FFFFFC;
  font-family: "Roboto";
}
::-webkit-scrollbar {
  display: none;
}
strong {
  color: #6CCFF6;
}
a {
  text-decoration: none;
}
body {
  margin: 0;
  padding-right: 1rem;
  padding-left: 1rem;
  @media (min-width: 426px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  @media (min-width: 1024px) {
    padding-right: 4rem;
    padding-left: 4rem;
  }
}
ul {
  list-style: none;
}
li {
  list-style: none;
}
a {
  color: #6CCFF6;
}
a:visited {
  color: #6CCFF6;
}
a:hover {
  color: #001011;
  cursor: pointer;
  transition: 0.2s;
}
`;

export default GlobalStyles;

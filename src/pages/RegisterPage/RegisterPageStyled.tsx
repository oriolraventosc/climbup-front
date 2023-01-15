import { styled } from "@mui/material";
import mobile from "../../images/registerMobileBackground.jpg";
import desktop from "../../images/registerBackground.jpg";

const RegisterPageStyled = styled("section")`
  padding-top: 60px;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mobile});
  background-size: cover;
  width: 100vw;
  position: relative;
  left: -1rem;
  @media (min-width: 1024px) {
    left: -4rem;
    background-image: url(${desktop});
    justify-content: right;
    padding-top: 110px;
    height: calc(100vh - 110px);
  }
`;

export default RegisterPageStyled;

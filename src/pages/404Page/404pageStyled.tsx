import { styled, Container } from "@mui/material";

const NotFoundPageStyled = styled(Container)`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  flex: 1;
  .load-more {
    width: 65vw;
    margin-top: 1rem;
    @media (min-width: 426px) {
      width: 30vw;
    }
    @media (min-width: 1024px) {
      width: 20vw;
    }
    background-color: #001011;
    color: #fffffc;
  }
  .load-more:hover {
    background-color: #6ccff6;
    color: #001011;
  }
  @media (min-width: 1024px) {
    height: 100vh;
    padding-top: 70px;
  }
`;

export default NotFoundPageStyled;

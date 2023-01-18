import { Container, styled } from "@mui/material";
import StyledTheme from "../../styles/colors";

const LoadMoreContainerStyled = styled(Container)`
  margin-bottom: 1rem;
  margin-top: 2rem;
  .load-more {
    width: 70vw;
    @media (min-width: 426px) {
      width: 30vw;
    }
    @media (min-width: 1024px) {
      width: 15vw;
    }
    background-color: ${StyledTheme.dark};
    color: ${StyledTheme.light};
  }
  .load-more:hover {
    background-color: ${StyledTheme.main};
    color: ${StyledTheme.dark};
  }
`;

export default LoadMoreContainerStyled;

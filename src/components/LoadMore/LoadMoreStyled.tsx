import { Container, styled } from "@mui/material";

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
    background-color: #001011;
    color: #fffffc;
  }
  .load-more:hover {
    background-color: #6ccff6;
    color: #001011;
  }
`;

export default LoadMoreContainerStyled;

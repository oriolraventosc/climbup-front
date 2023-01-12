import { Container, styled } from "@mui/material";

const NoResultsContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(75vh - 20vh);
  @media (min-width: 1024px) {
    height: 500px;
  }
`;

export default NoResultsContainerStyled;

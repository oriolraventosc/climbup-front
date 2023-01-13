import { styled } from "@mui/material";

const HomeStyled = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 426px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(343px, 1fr));
  }
`;

export default HomeStyled;

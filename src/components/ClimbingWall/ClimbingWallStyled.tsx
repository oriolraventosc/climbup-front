import { styled, Container } from "@mui/material";

const ClimbingWallStyled = styled(Container)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  @media (min-width: 426px) {
    width: 350px;
  }
  @media (min-width: 1024px) {
    width: 343px;
  }
  .climbingwall {
    &__image {
    }
  }
`;

export default ClimbingWallStyled;

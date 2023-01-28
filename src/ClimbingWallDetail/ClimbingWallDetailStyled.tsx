import { styled } from "@mui/material";
import StyledTheme from "../styles/colors";

const ClimbingWallDetailStyled = styled("section")`
  padding-top: 60px;
  .climbingwall-image {
    width: 100vw;
    position: relative;
    left: -1rem;
    img {
      object-fit: cover;
    }
  }
  .article-installations-activities {
    height: fit-content;
    background-color: ${StyledTheme.whiteBox};
    border-radius: 5px;
    width: 100%;
    min-height: 400px;
  }
  .article-installations-activities p:last-child {
    padding-bottom: 1.5rem;
  }
  .climbingwall-city {
    padding-top: 2rem;
    padding-bottom: 0.5rem;
  }
  .climbingwall-name {
    padding-bottom: 0.5rem;
  }
  .climbingwall-description {
    padding-bottom: 2rem;
  }
  .climbingwall-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    .article {
      background-color: ${StyledTheme.whiteBox};
      height: 400px;
      border-radius: 5px;
      width: 100%;
    }
    .article-prices-contact {
      background-color: ${StyledTheme.whiteBox};
      height: 250px;
      border-radius: 5px;
      width: 100%;
    }
  }
  img {
    border-radius: 5px;
  }
  .carrousel {
    width: 100%;
    height: 100%;
  }

  .conteCarrousel {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .itemCarrousel {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .itemCarrouselTarjeta {
    width: 100%;
    height: 100%;
  }

  .itemCarrouselArrows {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }

  .itemCarrouselArrows > i:hover {
    cursor: pointer;
  }

  #itemCarrousel-1 {
  }

  #itemCarrousel-2 {
  }

  #itemCarrousel-3 {
  }

  .icon-arrow {
    color: white;
  }
  @media (min-width: 1024px) {
    padding-top: 110px;
    .climbingwall-image {
      left: -4rem;
      height: 500px;
    }
    .climbingwall-city {
      padding-top: 4rem;
    }
    .climbingwall-description {
      padding-bottom: 4rem;
    }
    .climbingwall-information {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default ClimbingWallDetailStyled;

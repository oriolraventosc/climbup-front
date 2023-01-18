import styled from "styled-components";
import StyledTheme from "../../styles/colors";

const HeaderStyled = styled("header")`
  z-index: 9;
  position: relative;
  .header-desktop {
    display: none;
  }
  .hamburger {
    padding-right: 0.514rem;
  }
  .header-mobile-scroll {
    background-color: ${StyledTheme.main};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-mobile {
    background-color: ${StyledTheme.dark};
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-open {
      display: block;
      transform: translateX(-100%);
    }
    .header-mobile-open-opened {
      transform: translate(0);
    }
    &__item-open {
      color: ${StyledTheme.dark};
    }
    &__item-open:hover {
      color: ${StyledTheme.white};
      cursor: pointer;
      transition: 0.2s;
    }
    &__icon {
      color: ${StyledTheme.main};
    }
    &__icon-scroll {
      color: ${StyledTheme.dark};
    }
    &__icon:hover {
      color: ${StyledTheme.white};
      transition: 0.2s;
    }
    &__icon-scroll:hover {
      color: ${StyledTheme.white};
      transition: 0.2s;
    }
  }
  @media (min-width: 1024px) {
    .header-mobile-open {
      display: none;
    }
    .header-mobile {
      display: none;
    }
    .header-desktop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: ${StyledTheme.dark};
      &-scroll {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${StyledTheme.main};
      }
      &__icon {
        color: ${StyledTheme.main};
      }
      &__icon-scroll {
        color: ${StyledTheme.dark};
      }
      &__icon-scroll:hover {
        color: ${StyledTheme.white};
        cursor: pointer;
        transition: 0.2s;
      }
      &__icon:hover {
        color: ${StyledTheme.white};
        cursor: pointer;
        transition: 0.2s;
      }
      &__title {
        color: ${StyledTheme.white};
      }
      &__title-scroll {
        color: ${StyledTheme.dark};
      }
      &__item {
        color: ${StyledTheme.white};
      }
      &__item-scroll {
        color: ${StyledTheme.dark};
      }
      &__title:hover {
        cursor: pointer;
        color: ${StyledTheme.main};
        transition: 0.2s;
      }
      &__item:hover {
        cursor: pointer;
        color: ${StyledTheme.main};
        transition: 0.2s;
      }
    }
  }
`;

export default HeaderStyled;

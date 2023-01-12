import { styled, Container } from "@mui/material";

const HeaderStyled = styled(Container)`
  z-index: 9;
  position: relative;
  .header-desktop {
    display: none;
  }
  .hamburger {
    padding-right: 0.514rem;
  }
  .header-mobile-scroll {
    background-color: #6ccff6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-mobile {
    background-color: #001011;
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
      color: #001011;
    }
    &__item-open:hover {
      color: #fff;
      cursor: pointer;
      transition: 0.2s;
    }
    &__icon {
      color: #6ccff6;
    }
    &__icon-scroll {
      color: #001011;
    }
    &__icon:hover {
      color: #fff;
      transition: 0.2s;
    }
    &__icon-scroll:hover {
      color: #fff;
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
      background-color: #001011;
      &-scroll {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #6ccff6;
      }
      &__icon {
        color: #6ccff6;
      }
      &__icon-scroll {
        color: #001011;
      }
      &__icon-scroll:hover {
        color: #fff;
        cursor: pointer;
        transition: 0.2s;
      }
      &__icon:hover {
        color: #fff;
        cursor: pointer;
        transition: 0.2s;
      }
      &__title {
        color: #fff;
      }
      &__title-scroll {
        color: #001011;
      }
      &__item {
        color: #fff;
      }
      &__item-scroll {
        color: #001011;
      }
      &__title:hover {
        cursor: pointer;
        color: #6ccff6;
        transition: 0.2s;
      }
      &__item:hover {
        cursor: pointer;
        color: #6ccff6;
        transition: 0.2s;
      }
    }
  }
`;

export default HeaderStyled;

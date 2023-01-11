import { Spin as Hamburger } from "hamburger-react";
import { Container, Typography } from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import HeaderStyled from "./HeaderStyled";
import { useState } from "react";

const Header = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);
  const [isLogged] = useState(false);
  const changeNavBar = () => {
    window.scrollY ? setScroll(true) : setScroll(false);
  };
  window.addEventListener("scroll", changeNavBar);
  return (
    <HeaderStyled>
      <Container
        className={isScroll ? "header-mobile-scroll" : "header-mobile"}
        disableGutters
        maxWidth={false}
        sx={{
          backgroundColor: "primary.dark",
          width: "100vw",
          position: "fixed",
          left: 0,
          height: "60px",
        }}
        aria-label="mobile menu"
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            pl: "1rem",
            gap: "1rem",
          }}
        >
          <LandscapeIcon
            sx={{
              fontSize: {
                xxl: "6rem",
                xl: "6rem",
                lg: "6rem",
                md: "3.5rem",
                sm: "3rem",
                xs: "3rem",
              },
            }}
            className={
              isScroll ? "header-mobile__icon-scroll" : "header-mobile__icon"
            }
          />
        </Container>
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            pr: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          className="hamburger"
        >
          {" "}
          <Hamburger
            color={isScroll ? "#001011" : "#fff"}
            size={25}
            toggled={isOpen}
            toggle={setOpen}
          />
        </Container>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        className={isOpen ? "header-mobile-open-opened" : "header-mobile-open"}
        sx={{
          zIndex: "8",
          backgroundColor: "red",
          position: "fixed",
          width: "100%",
          left: 0,
          pl: "1rem",
          height: "100vh",
          bgcolor: "primary.main",
        }}
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "60px",
          }}
        >
          <LandscapeIcon
            sx={{
              fontSize: {
                xxl: "6rem",
                xl: "6rem",
                lg: "6rem",
                md: "3.5rem",
                sm: "3rem",
                xs: "3rem",
                color: "primary.dark",
              },
            }}
          />
          <Container
            disableGutters
            maxWidth={false}
            sx={{
              pr: "1rem",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            className="hamburger"
          >
            {" "}
            <Hamburger
              color="#001011"
              size={25}
              toggled={isOpen}
              toggle={setOpen}
            />
          </Container>
        </Container>
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            height: "calc(100vh - 60px)",
            pr: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: {
                xxl: "2.5rem",
                xl: "2.5rem",
                lg: "1.3rem",
                md: "2.5rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
            }}
            className="header-mobile__item-open"
          >
            Buscar rocódromos
          </Typography>
          {isLogged && (
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xxl: "2.5rem",
                  xl: "2.5rem",
                  lg: "1.3rem",
                  md: "2.5rem",
                  sm: "1.5rem",
                  xs: "1.5rem",
                },
              }}
              className="header-mobile__item-open"
            >
              Tus rocódromos
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{
              fontSize: {
                xxl: "2.5rem",
                xl: "2.5rem",
                lg: "1.3rem",
                md: "2.5rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
            }}
            className="header-mobile__item-open"
          >
            {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
          </Typography>
        </Container>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          width: "100vw",
          position: "fixed",
          left: 0,
          height: "110px",
        }}
        className="header-desktop"
        aria-label="desktop menu"
      >
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            pl: "4rem",
            gap: "1rem",
          }}
        >
          <LandscapeIcon
            sx={{
              fontSize: {
                xxl: "6rem",
                xl: "6rem",
                lg: "6rem",
                md: "6rem",
                sm: "2.5rem",
                xs: "2.5rem",
              },
            }}
            className="header-desktop__icon"
          />
          <Typography
            variant="h1"
            sx={{
              color: "primary.light",
              fontSize: {
                xxl: "4rem",
                xl: "3rem",
                lg: "2.5rem",
                md: "2.5rem",
                sm: "2.5rem",
                xs: "2.5rem",
              },
              fontWeight: "bold",
            }}
            className="header-desktop__title"
          >
            climbup
          </Typography>
        </Container>
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            pr: "4rem",
            gap: "2rem",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: {
                xxl: "2.5rem",
                xl: "1.6rem",
                lg: "1.3rem",
                md: "1.6rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
            }}
            className="header-desktop__item"
            aria-label="Buscar rocódromos"
          >
            Buscar rocódromos
          </Typography>
          {isLogged && (
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xxl: "2.5rem",
                  xl: "1.6rem",
                  lg: "1.3rem",
                  md: "1.6rem",
                  sm: "1.5rem",
                  xs: "1.5rem",
                },
              }}
              className="header-desktop__item"
              aria-label="Buscar rocódromos"
            >
              Tus rocódromos
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{
              fontSize: {
                xxl: "2.5rem",
                xl: "1.6rem",
                lg: "1.3rem",
                md: "1.6rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
            }}
            className="header-desktop__item"
            aria-label={isLogged ? "Cerrar sesión" : "Iniciar sesión"}
          >
            {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
          </Typography>
        </Container>
      </Container>
    </HeaderStyled>
  );
};

export default Header;

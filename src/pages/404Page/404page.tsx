import Header from "../../components/Header/Header";
import { Typography, Button } from "@mui/material";
import NotFoundPageStyled from "./404pageStyled";
import { useNavigate } from "react-router-dom";

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <NotFoundPageStyled
        disableGutters
        maxWidth={false}
        className="not-found-page"
      >
        <Typography
          variant="body2"
          sx={{
            color: "primary.main",
            fontSize: {
              xxl: "8rem",
              xl: "8rem",
              lg: "8rem",
              md: "8rem",
              sm: "8rem",
              xs: "8rem",
            },
            fontWeight: "bold",
          }}
          className="header-desktop__title"
          aria-label="404"
        >
          404
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: {
              xxl: "2.5rem",
              xl: "1.8rem",
              lg: "1.8rem",
              md: "1.8rem",
              sm: "2rem",
              xs: "2rem",
            },
            fontWeight: "regular",
            pb: "0.3rem",
            color: "primary.dark",
            textAlign: "center",
          }}
          aria-label="Página no encontrada"
        >
          Página no encontrada.
        </Typography>
        <Button
          className="load-more"
          sx={{
            fontSize: {
              xxl: "1.8rem",
              xl: "1.1rem",
              lg: "1.1rem",
              md: "1.1rem",
              sm: "1.3rem",
              xs: "1.3rem",
            },
          }}
          onClick={() => navigate("/home")}
        >
          VOLVER AL INICIO
        </Button>
      </NotFoundPageStyled>
    </>
  );
};

export default NotFoundPage;

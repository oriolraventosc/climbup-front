import ExploreIcon from "@mui/icons-material/Explore";
import { Typography } from "@mui/material";
import NoResultsContainerStyled from "./NoResultsContainerStyled";

const NoResults = (): JSX.Element => {
  return (
    <NoResultsContainerStyled disableGutters maxWidth={false}>
      <ExploreIcon
        sx={{
          color: "primary.main",
          fontSize: {
            xxl: "15rem",
            xl: "15rem",
            lg: "15rem",
            md: "15rem",
            sm: "15rem",
            xs: "15rem",
          },
        }}
        aria-label="icono no hay resultados"
      />
      <Typography
        sx={{
          fontSize: {
            xxl: "2.5rem",
            xl: "1.8rem",
            lg: "1.8rem",
            md: "1.8rem",
            sm: "2rem",
            xs: "2rem",
          },
        }}
      >
        No hay resultados
      </Typography>
    </NoResultsContainerStyled>
  );
};

export default NoResults;

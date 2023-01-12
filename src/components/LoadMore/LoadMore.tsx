import { Button } from "@mui/material";
import LoadMoreContainerStyled from "./LoadMoreStyled";

const LoadMore = (): JSX.Element => {
  return (
    <LoadMoreContainerStyled
      disableGutters
      maxWidth={false}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
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
      >
        CARGAR MÁS
      </Button>
    </LoadMoreContainerStyled>
  );
};

export default LoadMore;

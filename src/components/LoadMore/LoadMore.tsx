import { Button } from "@mui/material";
import { useState } from "react";
import { increaseLimitActionCreator } from "../../redux/features/FIlterSlicer/FilterSlice";
import { useAppDispatch } from "../../redux/hooks";
import LoadMoreContainerStyled from "./LoadMoreStyled";

const LoadMore = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const showedClimbingWalls = 6;
  const [limit, setLimit] = useState(6);
  const handleMoreClimbingWalls = () => {
    setLimit(limit + showedClimbingWalls);
    dispatch(increaseLimitActionCreator());
  };
  return (
    <LoadMoreContainerStyled
      disableGutters
      maxWidth={false}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Button
        className="load-more"
        onClick={handleMoreClimbingWalls}
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

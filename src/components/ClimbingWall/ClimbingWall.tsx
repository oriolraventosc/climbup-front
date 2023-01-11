import { Container, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ClimbingWallStyled from "./ClimbingWallStyled";

interface ClimbingWallProps {
  name: string;
  description: string;
  address: string;
  picture1: string;
}

const ClimbingWall = (climbingWall: ClimbingWallProps): JSX.Element => {
  return (
    <ClimbingWallStyled
      disableGutters
      maxWidth={false}
      className="climbingwall"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgb(0, 16, 17, 0.1)",
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: "300px", width: "100%" }}
      >
        <img
          height="100%"
          width="100%"
          alt={climbingWall.name}
          className="climbingwall__image"
          src={climbingWall.picture1}
        />
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ textAlign: "left", pl: "1rem", pt: "1rem", pr: "1rem" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xxl: "2.5rem",
              xl: "1.8rem",
              lg: "1.8rem",
              md: "1.8rem",
              sm: "2rem",
              xs: "2rem",
            },
            fontWeight: "bold",
            pb: "0.3rem",
            color: "primary.main",
          }}
        >
          {climbingWall.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xxl: "1.8rem",
              xl: "1.1rem",
              lg: "1.1rem",
              md: "1.1rem",
              sm: "1.3rem",
              xs: "1.3rem",
            },
            fontWeight: "regular",
          }}
          aria-label={climbingWall.description}
        >
          {climbingWall.description}
        </Typography>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          textAlign: "left",
          pl: "1rem",
          pt: "0.5rem",
          pr: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          pb: "1rem",
        }}
      >
        <LocationOnIcon sx={{ color: "primary.main", fontSize: "1.9rem" }} />
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xxl: "1.6rem",
              xl: "0.9rem",
              lg: "0.9rem",
              md: "0.9rem",
              sm: "1.1rem",
              xs: "1.1rem",
            },
            fontWeight: "regular",
          }}
        >
          {climbingWall.address}
        </Typography>
      </Container>
    </ClimbingWallStyled>
  );
};

export default ClimbingWall;

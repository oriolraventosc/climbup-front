import ClimbingWallDetailStyled from "./ClimbingWallDetailStyled";
import { Container, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import IconLocation from "../IconLocation/IconLocation";

interface ClimbingWallProps {
  name: string;
  description: string;
  address: string;
  picture1: string;
  city: string;
  schedule: string;
  picture2: string;
  picture3: string;
  picture4: string;
  installations: string[];
  activities: string[];
  prices: string;
  website: string;
  email: string;
  telephone: number;
  lat: number;
  lng: number;
}

const ClimbingWallDetail = (climbingWall: ClimbingWallProps): JSX.Element => {
  const {
    name,
    description,
    address,
    picture1,
    city,
    schedule,
    installations,
    activities,
    prices,
    website,
    email,
    telephone,
    lat,
    lng,
  } = climbingWall;
  return (
    <ClimbingWallDetailStyled>
      <Container disableGutters maxWidth={false} className="climbingwall-image">
        <img
          src={picture1}
          alt={`Rocódromo ${name}`}
          width="100%"
          height="100%"
        />
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        className="climbingwall-header"
      >
        <Typography
          className="climbingwall-city"
          sx={{
            fontSize: {
              xxl: "2rem",
              xl: "1.3rem",
              lg: "1.3rem",
              md: "1.3rem",
              sm: "1.5rem",
              xs: "1.5rem",
            },
            color: "primary.main",
            fontWeight: "regular",
            textAlign: "center",
            margin: "0",
          }}
          aria-label={city}
          aria-hidden="false"
        >
          {city.toUpperCase()}
        </Typography>
        <Typography
          variant="h2"
          className="climbingwall-name"
          sx={{
            fontSize: {
              xxl: "4rem",
              xl: "3rem",
              lg: "2.5rem",
              md: "2.5rem",
              sm: "2.5rem",
              xs: "2.5rem",
            },
            color: "primary.dark",
            fontWeight: "bold",
            textAlign: "center",
            margin: "0",
          }}
        >
          {name}
        </Typography>
        <Typography
          className="climbingwall-description"
          variant="body1"
          sx={{
            fontSize: {
              xxl: "2rem",
              xl: "1.3rem",
              lg: "1.3rem",
              md: "1.3rem",
              sm: "1.5rem",
              xs: "1.5rem",
            },
            fontWeight: "regular",
            textAlign: "center",
            color: "primary.dark",
            margin: "0",
          }}
          aria-hidden="false"
          aria-label={description}
        >
          {description}
        </Typography>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        className="climbingwall-information"
      >
        <article className="article">
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xxl: "2.2rem",
                xl: "1.5rem",
                lg: "1.5rem",
                md: "1.5rem",
                sm: "1.7rem",
                xs: "1.7rem",
              },
              color: "primary.main",
              fontWeight: "bold",
              pr: "1.5rem",
              pt: "1.5rem",
              pl: "1.5rem",
            }}
          >
            Dirección
          </Typography>
          <Typography
            className="climbingwall-information__title"
            sx={{
              fontSize: {
                xxl: "2rem",
                xl: "1.3rem",
                lg: "1.3rem",
                md: "1.3rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              color: "primary.dark",
              pr: "1.5rem",
              pt: "0.5rem",
              pl: "1.5rem",
            }}
            aria-hidden="false"
            aria-label={address}
          >
            {address}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xxl: "2.2rem",
                xl: "1.5rem",
                lg: "1.5rem",
                md: "1.5rem",
                sm: "1.7rem",
                xs: "1.7rem",
              },
              color: "primary.main",
              fontWeight: "bold",
              pr: "1.5rem",
              pt: "1rem",
              pl: "1.5rem",
            }}
          >
            Horario
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xxl: "2rem",
                xl: "1.3rem",
                lg: "1.3rem",
                md: "1.3rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              color: "primary.dark",
              pr: "1.5rem",
              pt: "0.5rem",
              pl: "1.5rem",
            }}
            aria-hidden="false"
            aria-label={schedule}
          >
            {schedule}
          </Typography>
        </article>
        <article className="article">
          <div className="carrousel">
            <div className="conteCarrousel">
              <div className="itemCarrousel" id="itemCarrousel-1">
                <div className="itemCarrouselTarjeta">
                  <img
                    src={climbingWall.picture2}
                    alt={climbingWall.name}
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="itemCarrouselArrows">
                  <a href="#itemCarrousel-1">
                    <ArrowBackIosIcon className="icon-arrow" />
                  </a>
                  <a href="#itemCarrousel-2">
                    <ArrowForwardIosIcon className="icon-arrow" />
                  </a>
                </div>
              </div>
              <div className="itemCarrousel" id="itemCarrousel-2">
                <div className="itemCarrouselTarjeta">
                  {" "}
                  <img
                    src={climbingWall.picture3}
                    alt={climbingWall.name}
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="itemCarrouselArrows">
                  <a href="#itemCarrousel-1">
                    <ArrowBackIosIcon className="icon-arrow" />
                  </a>
                  <a href="#itemCarrousel-3">
                    <ArrowForwardIosIcon className="icon-arrow" />
                  </a>
                </div>
              </div>
              <div className="itemCarrousel" id="itemCarrousel-3">
                <div className="itemCarrouselTarjeta">
                  {" "}
                  <img
                    src={climbingWall.picture4}
                    alt={climbingWall.name}
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="itemCarrouselArrows">
                  <a href="#itemCarrousel-2">
                    <ArrowBackIosIcon className="icon-arrow" />
                  </a>
                  <a href="#itemCarrousel-1">
                    <ArrowForwardIosIcon className="icon-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="article-installations-activities">
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xxl: "2.2rem",
                xl: "1.5rem",
                lg: "1.5rem",
                md: "1.5rem",
                sm: "1.7rem",
                xs: "1.7rem",
              },
              color: "primary.main",
              fontWeight: "bold",
              pr: "1.5rem",
              pt: "1.5rem",
              pl: "1.5rem",
            }}
          >
            Instalaciones
          </Typography>
          {installations.map((installation, index) => (
            <Typography
              key={index}
              aria-label={installation}
              aria-hidden="false"
              sx={{
                fontSize: {
                  xxl: "2rem",
                  xl: "1.3rem",
                  lg: "1.3rem",
                  md: "1.3rem",
                  sm: "1.5rem",
                  xs: "1.5rem",
                },
                color: "primary.dark",
                pr: "1.5rem",
                pt: "0.5rem",
                pl: "1.5rem",
              }}
            >
              {installation}
            </Typography>
          ))}
        </article>
        <article className="article-installations-activities">
          {" "}
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xxl: "2.2rem",
                xl: "1.5rem",
                lg: "1.5rem",
                md: "1.5rem",
                sm: "1.7rem",
                xs: "1.7rem",
              },
              color: "primary.main",
              fontWeight: "bold",
              pr: "1.5rem",
              pt: "1.5rem",
              pl: "1.5rem",
            }}
          >
            Actividades
          </Typography>
          {activities.map((activity, index) => (
            <Typography
              key={index}
              aria-label={activity}
              aria-hidden="false"
              sx={{
                fontSize: {
                  xxl: "2rem",
                  xl: "1.3rem",
                  lg: "1.3rem",
                  md: "1.3rem",
                  sm: "1.5rem",
                  xs: "1.5rem",
                },
                color: "primary.dark",
                pr: "1.5rem",
                pt: "0.5rem",
                pl: "1.5rem",
              }}
            >
              {activity}
            </Typography>
          ))}
        </article>
        <article className="article-prices-contact">
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xxl: "2.2rem",
                xl: "1.5rem",
                lg: "1.5rem",
                md: "1.5rem",
                sm: "1.7rem",
                xs: "1.7rem",
              },
              color: "primary.main",
              fontWeight: "bold",
              pr: "1.5rem",
              pt: "1.5rem",
              pl: "1.5rem",
            }}
          >
            Tarifas
          </Typography>
          <Typography
            className="climbingwall-information__contact-prices"
            aria-hidden="false"
            aria-label={prices}
            sx={{
              fontSize: {
                xxl: "2rem",
                xl: "1.3rem",
                lg: "1.3rem",
                md: "1.3rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              color: "primary.dark",
              pr: "1.5rem",
              pt: "0.5rem",
              pl: "1.5rem",
              pb: "1.5rem",
            }}
          >
            {prices}
          </Typography>
        </article>
        <article className="article-prices-contact">
          {" "}
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xxl: "2.2rem",
                xl: "1.5rem",
                lg: "1.5rem",
                md: "1.5rem",
                sm: "1.7rem",
                xs: "1.7rem",
              },
              color: "primary.main",
              fontWeight: "bold",
              pr: "1.5rem",
              pt: "1.5rem",
              pl: "1.5rem",
            }}
          >
            Datos de contacto
          </Typography>
          <Typography
            className="climbingwall-information__contact-prices"
            sx={{
              fontSize: {
                xxl: "2rem",
                xl: "1.3rem",
                lg: "1.3rem",
                md: "1.3rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              color: "primary.dark",
              pr: "1.5rem",
              pt: "0.5rem",
              pl: "1.5rem",
            }}
          >
            <a href={`//${website}`} target="_blank" rel="noreferrer">
              {website}
            </a>
          </Typography>
          <Typography
            className="climbingwall-information__contact-prices"
            sx={{
              fontSize: {
                xxl: "2rem",
                xl: "1.3rem",
                lg: "1.3rem",
                md: "1.3rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              color: "primary.dark",
              pr: "1.5rem",
              pt: "0.5rem",
              pl: "1.5rem",
            }}
          >
            <a href={`mailto: ${email}`}>{email}</a>
          </Typography>
          <Typography
            className="climbingwall-information__contact-prices"
            sx={{
              fontSize: {
                xxl: "2rem",
                xl: "1.3rem",
                lg: "1.3rem",
                md: "1.3rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
              color: "primary.dark",
              pr: "1.5rem",
              pt: "0.5rem",
              pl: "1.5rem",
              pb: "1.5rem",
            }}
          >
            <a href={`tel: ${telephone}`}>{telephone}</a>
          </Typography>
        </article>
      </Container>
      <MapContainer
        className="leaflet"
        center={{ lat: lat, lng: lng }}
        zoom={20}
        scrollWheelZoom={false}
        aria-label={`${name} location`}
        style={{ borderRadius: "5px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={{ lat: lat, lng: lng }} icon={IconLocation}>
          {" "}
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </ClimbingWallDetailStyled>
  );
};

export default ClimbingWallDetail;

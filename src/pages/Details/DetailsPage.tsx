import Header from "../../components/Header/Header";
import useClimbingWall from "../../hooks/climbingWall/useClimbingWall";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ClimbingWallDetail from "../../components/ClimbingWallDetail/ClimbingWallDetail";

const DetailsPage = (): JSX.Element => {
  const { loadClimbingWall } = useClimbingWall();
  const { id } = useParams();
  const climbingWall = useAppSelector(
    (state) => state.climbingWallsReducer.climbingWall
  );
  useEffect(() => {
    loadClimbingWall(id!);
  }, [id, loadClimbingWall]);
  return (
    <>
      <Header />
      <ClimbingWallDetail
        name={climbingWall.name}
        activities={climbingWall.activities}
        address={climbingWall.address}
        city={climbingWall.city}
        description={climbingWall.description}
        email={climbingWall.email}
        installations={climbingWall.installations}
        picture1={climbingWall.picture1}
        picture2={climbingWall.picture2}
        picture3={climbingWall.picture3}
        picture4={climbingWall.picture4}
        prices={climbingWall.prices}
        schedule={climbingWall.schedule}
        telephone={climbingWall.telephone}
        website={climbingWall.website}
        lat={climbingWall.lat}
        lng={climbingWall.lng}
      />
    </>
  );
};

export default DetailsPage;

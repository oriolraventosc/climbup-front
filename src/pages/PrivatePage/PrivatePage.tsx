import Header from "../../components/Header/Header";
import ClimbingWall from "../../components/ClimbingWall/ClimbingWall";
import HomeStyled from "../Home/HomeStyled";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import useClimbingWall from "../../hooks/climbingWall/useClimbingWall";
import LoadMore from "../../components/LoadMore/LoadMore";
import NoResults from "../../components/NoResults/NoResults";
import FilterPrivate from "../../components/FilterPrivate/FilterPrivate";

const PrivatePage = (): JSX.Element => {
  const { activity, installation, limit, location } = useAppSelector(
    (filterReducer) => filterReducer.filterReducer
  );
  const id = useAppSelector((state) => state.userReducer.id);
  const { loadUserClimbingWalls } = useClimbingWall();
  const climbingWalls = useAppSelector(
    (climbingWallsReducer) =>
      climbingWallsReducer.climbingWallsReducer.privateClimbingWalls
  );
  useEffect(() => {
    loadUserClimbingWalls(installation, activity, location, limit, id);
  }, [loadUserClimbingWalls, location, activity, installation, limit, id]);
  return (
    <>
      <Header />
      <FilterPrivate />
      {climbingWalls.length > 0 && (
        <>
          <HomeStyled aria-label="climbing walls list">
            {climbingWalls.map((climbingWall, index) => (
              <ClimbingWall
                address={climbingWall.address}
                description={climbingWall.description}
                name={climbingWall.name}
                key={index}
                picture1={climbingWall.picture1}
                id={climbingWall.id}
              />
            ))}
          </HomeStyled>
          <LoadMore />
        </>
      )}
      {climbingWalls.length === 0 && <NoResults />}
    </>
  );
};

export default PrivatePage;

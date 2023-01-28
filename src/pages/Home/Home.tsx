import Header from "../../components/Header/Header";
import ClimbingWall from "../../components/ClimbingWall/ClimbingWall";
import HomeStyled from "./HomeStyled";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import useClimbingWall from "../../hooks/climbingWall/useClimbingWall";
import LoadMore from "../../components/LoadMore/LoadMore";
import Filter from "../../components/Filter/Filter";
import NoResults from "../../components/NoResults/NoResults";

const Home = (): JSX.Element => {
  const { activity, installation, limit, location } = useAppSelector(
    (filterReducer) => filterReducer.filterReducer
  );
  const { loadAllClimbingWalls } = useClimbingWall();
  const climbingWalls = useAppSelector(
    (climbingWallsReducer) =>
      climbingWallsReducer.climbingWallsReducer.climbingWalls
  );
  useEffect(() => {
    loadAllClimbingWalls(location, activity, installation, limit);
  }, [loadAllClimbingWalls, location, activity, installation, limit]);
  return (
    <>
      <Header />
      <Filter />
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

export default Home;

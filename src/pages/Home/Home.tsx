import Header from "../../components/Header/Header";
import ClimbingWall from "../../components/ClimbingWall/ClimbingWall";
import HomeStyled from "./HomeStyled";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import useClimbingWall from "../../hooks/climbingWall/useClimbingWall";
import LoadMore from "../../components/LoadMore/LoadMore";

const Home = (): JSX.Element => {
  const { loadAllClimbingWalls } = useClimbingWall();
  const climbingWalls = useAppSelector(
    (climbingWallsReducer) =>
      climbingWallsReducer.climbingWallsReducer.climbingWalls
  );
  useEffect(() => {
    loadAllClimbingWalls();
  }, [loadAllClimbingWalls]);
  return (
    <>
      <Header />

      <HomeStyled aria-label="climbing walls list">
        {climbingWalls.map((climbingWall, index) => (
          <ClimbingWall
            address={climbingWall.address}
            description={climbingWall.description}
            name={climbingWall.name}
            key={index}
            picture1={climbingWall.picture1}
          />
        ))}
      </HomeStyled>
      <LoadMore />
    </>
  );
};

export default Home;

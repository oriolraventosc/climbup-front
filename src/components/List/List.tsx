import ListStyled from "./ListStyled";
import ClimbingWall from "../ClimbingWall/ClimbingWall";

const List = (): JSX.Element => {
  return (
    <ListStyled>
      <ClimbingWall />
      <ClimbingWall />
    </ListStyled>
  );
};

export default List;

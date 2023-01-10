import ClimbingWallStyled from "./ClimbingWallStyled";

const ClimbingWall = (): JSX.Element => {
  return (
    <ClimbingWallStyled
      disableGutters
      maxWidth={false}
      className="climbingwall"
    >
      <img
        width="100%"
        alt="text"
        src="https://images.unsplash.com/photo-1583178180198-0cf050dc2bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
    </ClimbingWallStyled>
  );
};

export default ClimbingWall;
